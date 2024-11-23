import { Test, TestingModule } from '@nestjs/testing';
import { AGplGatewayController } from './a_gpl_gateway.controller';
import { AGplGatewayService } from './a_gpl_gateway.service';

describe('AGplGatewayController', () => {
  let aGplGatewayController: AGplGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AGplGatewayController],
      providers: [AGplGatewayService],
    }).compile();

    aGplGatewayController = app.get<AGplGatewayController>(AGplGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(aGplGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
