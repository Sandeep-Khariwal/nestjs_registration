import { Controller , Post , Body ,Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<User> {
      return this.authService.signUp(signUpDto);
    }
  
    @Get('/login')
    login(@Body() loginDto: LoginDto): Promise<User> {
      return this.authService.login(loginDto);
    }
}
