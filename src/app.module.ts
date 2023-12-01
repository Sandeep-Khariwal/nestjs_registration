import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://sandeepkharival123:6TerDEFnxfDX5MLk@cluster0.gfuzmle.mongodb.net/nestjs?retryWrites=true&w=majority') ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log("hello sandep");
  }
}
