import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LocationDto } from '../location/location.dto';
import { SportsDto } from '../sports/sports.dto';
import { TypeDto } from '../type/type.dto';
import { UsersDto } from '../users/users.dto';

export class RequestDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  id_users_request: UsersDto;

  @ApiProperty()
  id_type: TypeDto;

  @ApiProperty()
  id_location_request: RequestDto;

  @ApiProperty()
  id_sports_request: SportsDto;
  
  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
