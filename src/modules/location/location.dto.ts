import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CityDto } from '../city/city.dto';
import { PlatformsDto } from '../platforms/platforms.dto';

export class LocationDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  latitude: string;

  @ApiProperty()
  longitude: string;

  @ApiProperty()
  id_city: CityDto;

  @ApiProperty()
  id_plataforms: PlatformsDto;
  
  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
