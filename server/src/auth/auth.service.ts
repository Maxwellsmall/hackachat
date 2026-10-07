import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '@nestjs/http-client';
import { AuthResponseDto } from './dto';

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
      url: `https://auth.hackclub.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=slack_id+verification_status`,
    };
  }

  async hackclubAuthCallback(
    code: string,
    redirect_uri: string,
  ): Promise<AuthResponseDto> {
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

    const oauthRes = await this.httpClient.post<{
      access_token: string;
    }>('https://auth.hackclub.com/oauth/token', {
      json: reqBody,
      headers: { 'Content-Type': 'application/json' },
    });

    if (oauthRes.status !== 200)
      throw new InternalServerErrorException(
        `Failed to exchange code for token: ${oauthRes.status} ${oauthRes.statusText}`,
      );

    console.log(oauthRes.data);

    const hackclubUserData = await this.httpClient.get<{
      identity: {
        ysws_eligible: boolean;
        id: string;
        verification_status: boolean;
        slack_id: string;
      };
    }>('https://auth.hackclub.com/api/v1/me', {
      headers: { Authorization: `Bearer ${oauthRes.data.access_token}` },
    });

    if (
      !hackclubUserData.data.identity.verification_status &&
      !hackclubUserData.data.identity.ysws_eligible
    )
      throw new ForbiddenException(
        "You are not eligible for Hackachat, it's either you haven't done your id verification, or your already pass 18",
      );

    console.log(hackclubUserData.data);

    const slackUserData = await this.httpClient.get<{
      displayName: string;
      imageUrl: string;
      userId: string;
    }>(
      `https://cachet.dunkirk.sh/users/${hackclubUserData.data.identity.slack_id}`,
    );

    if (slackUserData.status !== 200)
      throw new InternalServerErrorException('Unable to retrieve  user data');

    return {
      name: slackUserData.data.displayName,
      profilePicture: slackUserData.data.imageUrl,
      slackId: slackUserData.data.userId,
    };
  }
}
