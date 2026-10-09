import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpClient } from '@nestjs/http-client';
import { ChatResponseDto, ModelResponseDto, SendMessageDto } from './dto';
import { AiService } from '../ai/ai.service';
import { generateText } from 'ai';

@Injectable()
export class ChatService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly aiService: AiService,
  ) {}

  async getModels(): Promise<ModelResponseDto[]> {
    const modelRes = await this.httpClient.get<ModelResponseDto[]>(
      'https://ai.hackclub.com/proxy/v1/models',
    );

    if (modelRes.status !== 200)
      throw new InternalServerErrorException(
        'Failed to fetch models from hacklcub proxy',
      );

    return modelRes.data;
  }

  async sendMessage(sendMessageDto: SendMessageDto): Promise<ChatResponseDto> {
    const res = await generateText({
      instructions: [
        this.aiService.getSystemPrompt(sendMessageDto.userData),
        ...sendMessageDto.messages
          .filter((m) => m.role === 'system')
          .map((message) => ({
            role: message.role as 'system',
            content: message.content,
          })),
      ],

      model: this.aiService.hackclubAI(sendMessageDto.modelConfig.modelName),
      temperature: sendMessageDto.modelConfig.temperatureOrCreativity,
      messages: sendMessageDto.messages
        .filter((m) => m.role !== 'system')
        .map((message) => ({
          role: message.role,
          content: message.content,
        })),
    });

    return {
      reasoning: res.finishReason,
      response: { role: 'assistant', content: res.text },
      usage: {
        inputToken: res.usage.inputTokens!,
        outputToken: res.usage.outputTokens!,
      },
    };
  }
}
