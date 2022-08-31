import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SportsDto } from '../sports/sports.dto';
import { UsersDto } from '../users/users.dto';

export class UsersSportsDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  id_sports: SportsDto;

  @ApiProperty()
  id_users: UsersDto;

  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
