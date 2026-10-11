import {
  IsArray,
  IsEnum,
  IsNumber,
  IsObject,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
enum ResponseDetailLevel {
  short = 'short',
  balanced = 'balanced',
  detailed = 'detailed',
}
enum MessageRole {
  system = 'system',
  user = 'user',
  assistant = 'assistant',
}

type MessageRoleValues = `${MessageRole}`;
export class UserDataDto {
  @ApiProperty()
  @IsString()
  userIdentify!: string;

  @ApiProperty()
  @IsString()
  customInstruction!: string;
}
export class ModelConfigDto {
  @ApiProperty()
  @IsString()
  modelName!: string;

  @ApiProperty({ minimum: 0.1, maximum: 1.3 })
  @IsNumber()
  @Min(0.1)
  @Max(1.3)
  temperatureOrCreativity!: number;

  @ApiProperty({ enum: ResponseDetailLevel })
  @IsEnum(ResponseDetailLevel)
  responseDetailLevel!: ResponseDetailLevel;
}

export class MessageDto {
  @ApiProperty({ enum: MessageRole })
  @IsEnum(MessageRole)
  role!: MessageRoleValues;

  @ApiProperty()
  @IsString()
  content!: string;
}

export class SendMessageDto {
  @ApiProperty({ type: ModelConfigDto })
  @Type(() => ModelConfigDto)
  @IsObject()
  modelConfig!: ModelConfigDto;

  @ApiProperty({ type: UserDataDto })
  @Type(() => UserDataDto)
  @IsObject()
  userData!: UserDataDto;

  @ApiProperty({ type: [MessageDto] })
  @Type(() => MessageDto)
  @IsObject({ each: true })
  @IsArray()
  messages!: MessageDto[];
}
