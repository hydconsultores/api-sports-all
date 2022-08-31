import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LocationDto } from '../location/location.dto';

export class TypeDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
