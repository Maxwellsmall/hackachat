import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpClient } from '@nestjs/http-client';
import { ModelResponseDto, SendMessageDto } from './dto';
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

  async sendMessage(sendMessageDto: SendMessageDto) {
    const res = await generateText({
      model: this.aiService.hackclubAI(sendMessageDto.modelConfig.modelName),
      temperature: sendMessageDto.modelConfig.temperatureOrCreativity,
      messages: sendMessageDto.messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    });

    // const res = await this.aiService.chat.send({
    //   chatRequest: {
    //     model: sendMessageDto.modelConfig.modelName,
    //     messages:
    //     stream: false,
    //   },
    // });

    // console.log(res);
  }
}
