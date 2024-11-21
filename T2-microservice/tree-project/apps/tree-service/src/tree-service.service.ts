import { Controller, OnModuleInit } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Tree } from 'entities/tree';
import { Repository } from 'typeorm';
import { PROTO_TREE_SERVICE } from 'utils/constants';

@Controller()
export class TreeService implements OnModuleInit {
  constructor(
    @InjectRepository(Tree)
    private treeRepository: Repository<Tree>,
  ) {}

  onModuleInit() {
    console.log('gRPC Tree Service Initialized');
    console.log(this.treeRepository);
  }

  @GrpcMethod(PROTO_TREE_SERVICE.SERVICE)
  async createTree(data: Partial<Tree>) {
    const newTree = this.treeRepository.create(data);
    return await this.treeRepository.save(newTree);
  }

  @GrpcMethod(PROTO_TREE_SERVICE.SERVICE)
  async getTree(data: { id: number }) {
    const tree = await this.treeRepository.findOne({ where: { id: data.id } });
    if (!tree) {
      throw new Error('Tree not found');
    }
    return tree;
  }

  @GrpcMethod(PROTO_TREE_SERVICE.SERVICE)
  async getAllTree() {
    return this.treeRepository.find();
  }

  @GrpcMethod(PROTO_TREE_SERVICE.SERVICE)
  async updateTree(data: Partial<Tree>) {
    const id = data.id;
    let tree = await this.treeRepository.findOne({ where: { id } });
    if (!tree) {
      throw new Error('Tree not found');
    }
    tree = { ...tree, ...data };
    await this.treeRepository.update(id, tree);
    return tree;
  }

  @GrpcMethod(PROTO_TREE_SERVICE.SERVICE)
  async deleteTree(data: { id: number }) {
    const tree = await this.treeRepository.findOne({ where: { id: data.id } });
    if (!tree) {
      throw new Error('Tree not found');
    }
    await this.treeRepository.delete(data.id);
    return { message: `Tree with ID ${data.id} has been deleted` };
  }
}
