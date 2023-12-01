import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Login, LoginSchema } from "./schema/login.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports:[MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }])],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule {
   constructor(){console.log("Authmodule");
   }
}