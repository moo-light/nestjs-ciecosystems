import { Injectable } from '@nestjs/common';
import { CarrotRequestDTO } from 'apps/carrot-service/dtos/carrot.request.dto';
import { Carrot, listCarrot } from 'apps/carrot-service/dtos/carrot.response.dto';

@Injectable()
export class CarrotService {
  getCarrots(args?: CarrotRequestDTO): Carrot[] {
    const result: Carrot[] = listCarrot
    return result;
  }
}
