import { Injectable , UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
        // private jwtService: JwtService,
    ){}

    async signUp(signUpDto: SignUpDto): Promise<User> {
        const { name, email, password } = signUpDto;
    
        // const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await this.userModel.create({
          name,
          email,
          password
        });
    
        // const token = this.jwtService.sign({ id: user._id });
    
        return user;
      }


    async login(loginDto: LoginDto): Promise<User> {
        const { email, password } = loginDto;
    
        const user = await this.userModel.findOne({ email });
    
        if (!user) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordMatched = user.password === password? true : false // await bcrypt.compare(password, user.password);
    
        if (!isPasswordMatched) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        // const token = this.jwtService.sign({ id: user._id });
    
        return user;
      }
}
