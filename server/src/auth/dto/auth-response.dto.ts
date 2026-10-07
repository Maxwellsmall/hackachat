import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ description: 'User name from slack' })
  name!: string;
  @ApiProperty({ description: 'User profile picture from slack' })
  profilePicture!: string;
  @ApiProperty({ description: 'User slack id' })
  slackId!: string;
}
