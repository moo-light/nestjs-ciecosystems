# Interceptors

## What is Interceptor?

A guard is a class annotated with `@Injectable` and implements a `NestInterceptor` interface

every interceptor implements the function intercept() method   
## scope
interceptors can be controller-scoped, method-scoped, or global-scoped.
## Way to use interceptor

- extra logic binding: adding logic before or after route handling
- transform the result returned from the function
- exception handling: transform exception result
- extends function behavior
- override: override the function completely example caching data 
## How to use Interceptor
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
