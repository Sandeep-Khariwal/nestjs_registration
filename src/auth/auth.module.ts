import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { AuthController } from './auth.controller';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';

@Module({
  imports:[ MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
          //  PassportModule.register({defaultStrategy:'jwt'}),
          //  JwtModule.registerAsync({
          //   inject:[ConfigService],
          //   useFactory : (config:ConfigService) =>{
          //     return {
          //       secret : config.get<string>('JWT_Security'),
          //       signOptions: {
          //         expiresIn: config.get<string | number>('JWT_Expire')
          //       }
          //     }
          //   }
          //  })
],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
