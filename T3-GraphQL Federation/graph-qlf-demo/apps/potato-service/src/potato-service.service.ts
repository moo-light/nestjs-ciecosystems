import { Injectable } from '@nestjs/common';
import { PotatoRequestDTO } from 'apps/potato-service/dtos/potato.request.dto';
import { listPotato, Potato } from 'apps/potato-service/dtos/potato.response.dto';

@Injectable()
export class PotatoService {
  getPotatoes(args?: PotatoRequestDTO): Potato[] {
    const result: Potato[] = listPotato
    return result;
  }
}
