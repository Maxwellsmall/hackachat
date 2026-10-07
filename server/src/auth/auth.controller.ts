import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthResponseDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Signin with Hackclub Auth',
    description:
      'Redirect the user to the Hackclub Auth sign up page,  after the user authorizes your app, they will be redirected to the redirect url you provide with an authorization code',
  })
  @ApiQuery({
    name: 'redirect_uri',
    description: 'The URI to redirect the user to after authentication',
  })
  @Get('hackclubauth')
  @Redirect()
  hackclubAuth(@Query('redirect_uri') redirect_uri: string) {
    return this.authService.hackclubAuth(redirect_uri);
  }

  @ApiOperation({
    summary: 'Exchange your code, and get user data',
    description: 'Exchange your code and get user data',
  })
  @ApiResponse({ status: 200, type: AuthResponseDto })
  @ApiQuery({
    name: 'redirect_uri',
    description: 'The URI to redirect the user to after authentication',
  })
  @ApiQuery({
    name: 'code',
    description:
      'The code return from the redirect from Hackclub Auth oauth page',
  })
  @Get('hackclubauth/callback')
  hackclubAuthCallback(
    @Query('redirect_uri') redirect_uri: string,
    @Query('code') code: string,
  ) {
    return this.authService.hackclubAuthCallback(code, redirect_uri);
  }
}
