# Guards

## What is guard?

A guard is a class annotated with `@Injectable` and implements a `CanActivate` interface

## Way to use guard

- validation: check if the user is a valid user and should be allowed to access this route handler
> Note: guard is executed after all of the middlewares

<!-- ## Global guard -->

<!-- Best practices: use ValidatorPipe and passing annotation before request -->
## Examples

```
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

> authorization is a great use case for Guards because specific routes should be available only when the caller (usually a specific authenticated user) has sufficient permissions.
