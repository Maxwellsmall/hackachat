import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { HttpClientModule } from '@nestjs/http-client';

@Module({
  imports: [HttpClientModule.register({})],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
