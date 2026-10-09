import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ModelResponseDto, SendMessageDto } from './dto';
import { type Request } from 'express';
import { Throttle } from '@nestjs/throttler';

@Throttle({ minutes: { limit: 20, ttl: 60000, blockDuration: 60000 } })
@Throttle({ day: { limit: 250, ttl: 86400000, blockDuration: 86400000 } })
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiOperation({
    summary: 'Get all models',
    description: 'Get all models from Hackclub ai proxy',
  })
  @ApiResponse({ status: 200, type: ModelResponseDto })
  @Get('/models')
  getModels() {
    return this.chatService.getModels();
  }

  @Post('/send')
  async sendMessage(
    @Body() sendMessageDto: SendMessageDto,
    @Req() req: Request,
  ) {
    await this.chatService.checkEligibility(req);
    return this.chatService.sendMessage(sendMessageDto);
  }
}
