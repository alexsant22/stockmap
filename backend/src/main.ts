import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS para permitir solicitações do frontend (React + Vite) em http://localhost:5173
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
