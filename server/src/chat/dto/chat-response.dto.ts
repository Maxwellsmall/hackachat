import { ApiProperty } from '@nestjs/swagger';

class ModelArchitectureDto {
  @ApiProperty()
  modality!: string;
  @ApiProperty({ type: [String] })
  input_modalities!: string[];
  @ApiProperty({ type: [String] })
  output_modalities!: string[];
  @ApiProperty()
  tokenizer!: string;
  @ApiProperty({ type: 'string', nullable: true })
  instruct_type!: string | null;
}
class ModelPricingDto {
  @ApiProperty()
  prompt!: number;
  @ApiProperty()
  completion!: number;
  @ApiProperty({ required: false })
  image_output?: number;
  @ApiProperty({ required: false })
  web_search?: number;
  @ApiProperty({ required: false })
  input_cache_read?: number;
}
export class ModelResponseDto {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  canonical_slug!: string;
  @ApiProperty({ type: 'string', nullable: true })
  hugging_face_id!: string | null;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  created!: number;
  @ApiProperty()
  description!: string;
  @ApiProperty()
  context_length!: number;
  @ApiProperty({ type: ModelArchitectureDto })
  architecture!: ModelArchitectureDto;
  @ApiProperty({ type: ModelPricingDto })
  pricing!: ModelPricingDto;
}

class ChatResponseUsageDto {
  @ApiProperty()
  inputToken!: number;
  @ApiProperty()
  outputToken!: number;
}

class ChatResponseObjectDto {
  @ApiProperty({ default: 'assistance' })
  role!: 'assistant';
  @ApiProperty()
  content!: string;
}
export class ChatResponseDto {
  @ApiProperty({ type: ChatResponseUsageDto })
  usage!: ChatResponseUsageDto;
  @ApiProperty({ type: 'string', nullable: true })
  reasoning!: string | null;
  @ApiProperty({ type: ChatResponseObjectDto })
  response!: ChatResponseObjectDto;
}
