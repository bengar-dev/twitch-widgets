import { Module } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { HealthcheckResolver } from './healthcheck.resolver';

@Module({
  providers: [HealthcheckResolver, HealthcheckService],
})
export class HealthcheckModule {}
