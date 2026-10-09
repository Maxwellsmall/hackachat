import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenRouter } from '@openrouter/sdk';
import {
  createOpenRouter,
  OpenRouterProvider,
} from '@openrouter/ai-sdk-provider';

@Injectable()
export class AiService extends OpenRouter {
  hackclubAI: OpenRouterProvider;
  constructor(private readonly config: ConfigService) {
    super({
      apiKey: config.get('HACKCLUB_AI_API_KEY'),
      serverURL: config.get('HACKCLUB_AI_SERVER_URL'),
    });
    this.hackclubAI = createOpenRouter({
      apiKey: this.config.get('HACKCLUB_AI_API_KEY'),
      baseURL: this.config.get('HACKCLUB_AI_SERVER_URL'),
    });
  }
}
