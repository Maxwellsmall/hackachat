import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HttpClientModule } from '@nestjs/http-client';

@Module({
  imports: [HttpClientModule.register({})],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
