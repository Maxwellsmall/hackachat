import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '@nestjs/http-client';

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpClient: HttpClient,
  ) {}
  hackclubAuth(redirect_uri: string) {
    if (!redirect_uri)
      throw new BadRequestException('redirect_uri is required');

    const client_id = this.config.get<string>('HACKCLUB_AUTH_CLIENT_ID');

    return {
      url: `https://auth.hackclub.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=name+verification_status`,
    };
  }

  async hackclubAuthCallback(code: string, redirect_uri: string) {
    //
    if (!code) throw new BadRequestException('code is required');
    if (!redirect_uri)
      throw new BadRequestException('redirect_uri is required');

    const client_id = this.config.get<string>('HACKCLUB_AUTH_CLIENT_ID');

    const client_secret = this.config.get<string>('HACKCLUB_AUTH_SECRET');

    const reqBody = {
      client_id,
      client_secret,
      redirect_uri,
      code,
      grant_type: 'authorization_code',
    };

    const req = await this.httpClient.post(
      'https://auth.hackclub.com/oauth/token',
      { json: reqBody },
    );
  }
}
