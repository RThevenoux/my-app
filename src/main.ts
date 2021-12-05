import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

const PORT = (env.PORT ? env.PORT : 3000);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log(`Listening on port ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
