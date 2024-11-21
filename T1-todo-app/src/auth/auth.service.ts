import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDTO, SignUpDTO } from 'src/auth/dtos/auth.DTOS';
import { SignInResult } from 'src/auth/dtos/auth.result.dtos';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    signUp(registerInfo: SignUpDTO): string {
        throw new Error('Method not implemented.');
    }

    async signIn(
        signInDTO: SignInDTO
    ): Promise<SignInResult> {
        const user = await this.usersService.findOneEmail(signInDTO.email);
        if (user?.password !== signInDTO.password) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.email, username: user.name };
        const token = await this.jwtService.signAsync(payload);

        return new SignInResult(token, user);
    }
}
