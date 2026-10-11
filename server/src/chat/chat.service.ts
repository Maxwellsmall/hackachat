import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpClient } from '@nestjs/http-client';
import { ChatResponseDto, ModelResponseDto, SendMessageDto } from './dto';
import { AiService } from '../ai/ai.service';
import { generateText } from 'ai';
import { Request } from 'express';

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

  async checkEligibility(req: Request) {
    if (!req.headers.authorization) throw new UnauthorizedException();
    const hackclubUserData = await this.httpClient.get<{
      identity: {
        ysws_eligible: boolean;
        id: string;
        verification_status: boolean;
        slack_id: string;
      };
    }>('https://auth.hackclub.com/api/v1/me', {
      headers: {
        Authorization: `${req.headers.authorization || (req.headers['Authorization'] as string)}`,
      },
    });

    if (
      !hackclubUserData.data.identity.verification_status ||
      !hackclubUserData.data.identity.ysws_eligible
    )
      throw new ForbiddenException(
        "You are not eligible for Hackachat, it's either you haven't done your id verification, or your already pass 18",
      );
  }
}
