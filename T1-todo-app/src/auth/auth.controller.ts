import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { SignInDTO, SignUpDTO } from 'src/auth/dtos/auth.DTOS';
import { User } from 'src/entities/user.entity';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('sign-in')
    async signIn(@Body() loginInfo: SignInDTO): Promise<any> {
        return this.authService.signIn(loginInfo);
    }

    @Post('sign-up')
    async signUp(@Body() registerInfo: SignUpDTO): Promise<any> {
        return this.authService.signUp(registerInfo);
    }

}
