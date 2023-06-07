import { CommandFactory } from 'nest-commander';

import { CLIModule } from './seeding.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  try {
    await CommandFactory.run(CLIModule, new Logger());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

bootstrap();
