import { dataSourceOptions } from '../data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger, Module } from '@nestjs/common';
import { TeamSeedCommand } from './teams-seed/team-seed.command';
import { TeamsModule } from '../teams/teams.module';
import { PlayersSeedCommand } from './players';
import { PlayersModule } from '../players';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TeamsModule,
    PlayersModule,
  ],
  providers: [Logger, TeamSeedCommand, PlayersSeedCommand],
})
export class CLIModule {}
