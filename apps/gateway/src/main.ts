import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import '../../../env-loader';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((error) => {
  console.error(`Application failed to start: ${error}`);
  process.exit(1);
});
