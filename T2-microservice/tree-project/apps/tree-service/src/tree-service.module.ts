import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeService } from 'apps/tree-service/src/tree-service.service';
import { Tree } from 'entities/tree';
import { Observable } from 'rxjs';

export interface ITreeService {
  createTree(data: { species: string; age: number }): Observable<any>;
  getTree(data: { id: number }): Observable<any>;
  updateTree(data: { id: number; species: string; age: number }): Observable<any>;
  deleteTree(data: { id: number }): Observable<any>;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Tree])
  ],
  providers: [TreeService],
})
export class TreeServiceModule { }