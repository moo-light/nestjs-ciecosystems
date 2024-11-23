import { Injectable } from '@nestjs/common';

@Injectable()
export class AGplGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
