import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './schema/login.schema';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Login.name) private loginModel: Model<Login>) {}

    async Register(registerDto:RegisterDto): Promise<Login | String >{
        const { name, email, password } = registerDto;

        const existUser = await this.loginModel.findOne({email:email})

        if(existUser){
            throw new UnauthorizedException('Email already exist');
        }
        else{
            const user = await this.loginModel.create({
                name,
                email,
                password
              });
          
              return user;
        }
    }

    async Login(loginDto: LoginDto): Promise<Login | String>{
        const { email, password } = loginDto;
    
        const user = await this.loginModel.findOne({ email:email });
    
        if (!user) {
         throw new UnauthorizedException('Invalid email or password');
        }
        else{
            const isPasswordMatched = user.password === password? true : false 
            if (!isPasswordMatched) {
            throw new UnauthorizedException('Invalid email or password');
        }
        return user
        }
  }
}
