import { NestFactory } from '@nestjs/core';
import { AppModule } from 'apps/api-services/src/apis.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Tree API')
    .setDescription('API for managing tree data')
    .setVersion('1.0')
    .addTag('trees')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('API service running on http://localhost:3000');
  console.log('Swagger docs available at http://localhost:3000/api');
}
bootstrap();
