import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TypeUsersDto } from '../type_users/type_users.dto';

export class PlatformsDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  rut: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  mail: string;

  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
