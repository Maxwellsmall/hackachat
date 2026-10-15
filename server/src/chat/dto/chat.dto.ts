import {
  IsArray,
  IsEnum,
  IsNumber,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';

enum ResponseDetailLevel {
  short = 'short',
  balanced = 'balanced',
  detailed = 'detailed',
}
enum MessageRole {
  user = 'user',
  assistant = 'assistant',
}

enum FileEnum {
  file = 'file',
}
enum TextEnum {
  text = 'text',
}

type MessageRoleValues = `${MessageRole}`;

const IMAGE_TYPE = [
  `image/png`,
  'image/jpeg',
  'image/webp',
  'image/gif',
] as const;

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

export class MessageContentImageDto {
  @ApiProperty({ default: FileEnum.file, enum: FileEnum })
  @IsEnum(FileEnum)
  type!: `${FileEnum}`;

  @ApiProperty({
    example: 'data:image/jpeg;base64,.....',
    description: 'Image as base64 data URL',
  })
  @IsString()
  @MaxLength(3_000_000)
  @Matches(/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+$/)
  data!: string;

  @ApiProperty({ enum: IMAGE_TYPE })
  @IsString()
  mediaType!: string;
}
export class MessageContentTextDto {
  @ApiProperty({ default: TextEnum.text, enum: TextEnum })
  @IsEnum(TextEnum)
  type!: `${TextEnum}`;

  @ApiProperty()
  @IsString()
  @MaxLength(20000)
  text!: string;
}

@ApiExtraModels(MessageContentTextDto, MessageContentImageDto)
export class MessageDto {
  @ApiProperty({ enum: MessageRole })
  @IsEnum(MessageRole)
  role!: MessageRoleValues;

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(MessageContentTextDto) },
        { $ref: getSchemaPath(MessageContentImageDto) },
      ],
    },
  })
  @Type(() => Object, {
    discriminator: {
      property: 'type',
      subTypes: [
        { name: 'text', value: MessageContentTextDto },
        { name: 'file', value: MessageContentTextDto },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  content!: (MessageContentImageDto | MessageContentTextDto)[];
}

export class SendMessageDto {
  @ApiProperty({ type: ModelConfigDto })
  @ValidateNested()
  @Type(() => ModelConfigDto)
  modelConfig!: ModelConfigDto;

  @ApiProperty({ type: UserDataDto })
  @ValidateNested()
  @Type(() => UserDataDto)
  userData!: UserDataDto;

  @ApiProperty({ type: [MessageDto] })
  @Type(() => MessageDto)
  @ValidateNested({ each: true })
  @IsArray()
  messages!: MessageDto[];
}
