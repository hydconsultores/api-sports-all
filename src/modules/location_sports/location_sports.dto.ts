import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LocationDto } from '../location/location.dto';
import { SportsDto } from '../sports/sports.dto';
import { UsersDto } from '../users/users.dto';

export class LocationSportsDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  id_sports_location: SportsDto;

  @ApiProperty()
  id_location_location: LocationDto;

  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
