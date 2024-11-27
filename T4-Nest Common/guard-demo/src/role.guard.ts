/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext,  } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    validateRequest(request: Request): boolean {
        const headers = request.headers;
        if (headers.hello === "allow")
            return true;
        return false;
    }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }


}