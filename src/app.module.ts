import { Module } from '@nestjs/common';
import { GlobalModule } from './shared/global.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeUsersModule } from './modules/type_users/type_users.module';
import { SportsModule } from './modules/sports/sports.module';
import { UsersSportsModule } from './modules/users_sports/users_sports.module';
import { CityModule } from './modules/city/city.module';
import { LocationModule } from './modules/location/location.module';
import { UsersCityModule } from './modules/users_city/users_city.module';
import { PlatformsModule } from './modules/platforms/platforms.module';
import { UsersLocationModule } from './modules/users_location/users_location.module';
import { LocationSportsModule } from './modules/location_sports/location_sports.module';
import { TypeModule } from './modules/type/type.module';
import { RequestModule } from './modules/request/request.module';
@Module({
  imports: [GlobalModule,
    AuthModule,
    SportsModule,
    UsersSportsModule,
    UsersModule,
    CityModule,
    LocationModule,
    UsersCityModule,
    PlatformsModule,
    UsersLocationModule,
    TypeUsersModule,
    LocationSportsModule,
    TypeModule,
    RequestModule
  ],
  providers: [],
})
export class AppModule { }
