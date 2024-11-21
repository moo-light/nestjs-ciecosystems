import { Controller, Post, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { PROTO_TREE_SERVICE } from 'utils/constants';
import { ITreeService } from 'apps/tree-service/src/tree-service.module';


@Controller('trees')
export class TreeController {
  private treeService: ITreeService;

  constructor(@Inject(PROTO_TREE_SERVICE.NAME) private client: ClientGrpc) { }

  onModuleInit() {
    this.treeService = this.client.getService<ITreeService>(PROTO_TREE_SERVICE.SERVICE);
  }

  @Post()
  create(@Body() data: { species: string; age: number }) {
    return this.treeService.createTree(data);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.treeService.getTree({ id });
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: { species: string; age: number }) {
    return this.treeService.updateTree({ id, ...data });
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.treeService.deleteTree({ id });
  }
}
