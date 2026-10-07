import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('hackclubauth')
  @Redirect()
  hackclubAuth(@Query('redirect_uri') redirect_uri: string) {
    return this.authService.hackclubAuth(redirect_uri);
  }

  @Get('hackclubauth/callback')
  @Redirect()
  hackclubAuthCallback(
    @Query('redirect_uri') redirect_uri: string,
    @Query('code') code: string,
  ) {
    return this.authService.hackclubAuthCallback(code, redirect_uri);
  }
}
