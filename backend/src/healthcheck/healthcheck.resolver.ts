import { Query, Resolver } from '@nestjs/graphql';
import { HealthcheckService } from './healthcheck.service';

@Resolver('Healthcheck')
export class HealthcheckResolver {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Query('healthcheck')
  healthCheck() {
    return this.healthcheckService.healthcheck();
  }
}
