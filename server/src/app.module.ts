import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [
        { name: 'minute', limit: 20, ttl: 60000, blockDuration: 60000 },
        { name: 'dat', limit: 250, ttl: 86400000, blockDuration: 86400000 },
      ],
    }),
    AuthModule,
    ChatModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}

/**
 * @Throttle({ default: { } })
@Throttle({ default: { limit: 250, ttl: 86400000, blockDuration: 86400000 } })

 */
