import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://sandeepkharival123:6TerDEFnxfDX5MLk@cluster0.gfuzmle.mongodb.net/nestjs?retryWrites=true&w=majority'),
  AuthModule  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}