import { Injectable } from '@nestjs/common';
import { HttpClient } from '@nestjs/http-client';

@Injectable()
export class ChatService {
  constructor(private readonly httpClient: HttpClient) {}

  async getModels() {}
}
