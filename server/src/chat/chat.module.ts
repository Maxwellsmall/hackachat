import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { HttpClientModule } from '@nestjs/http-client';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [HttpClientModule.register({}), AiModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
