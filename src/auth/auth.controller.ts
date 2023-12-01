import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { Login } from "./schema/login.schema";
import { LoginDto } from "./dto/login.dto";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/register')
    signUp(@Body() registerDto: RegisterDto): Promise<Login | String> {
      return this.authService.Register(registerDto);
    }
  
    @Post('/login')
    login(@Body() loginDto: LoginDto): Promise<Login | String> {
      return this.authService.Login(loginDto);
    }
}