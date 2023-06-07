import { Logger } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';
import csv from 'csvtojson';
import { createReadStream } from 'fs';
import { ITeam } from 'types';
import { TeamsService } from '../../teams/teams.service';
import { IRawTeam } from './raw-team.interface';

@Command({
  name: 'teams-seed',
  description: '',
})
export class TeamSeedCommand extends CommandRunner {
  private logger: Logger = new Logger(TeamSeedCommand.name);

  constructor(private readonly teamsService: TeamsService) {
    super();
  }

  async run(): Promise<void> {
    this.logger.log('Start teams seeding');

    const filename = `${__dirname}/teams-data.csv`;
    const stream = createReadStream(filename);
    const rawTeams = await csv().fromStream(stream);

    const teams: Array<ITeam> = rawTeams.map((team: IRawTeam) => ({
      name: team.team_name,
      commonName: team.common_name,
      country: team.country,
      season: team.season,
      matchesPlayed: team.matches_played,
      losses: team.losses,
      wins: team.wins,
      lossesAway: team.losses_away,
      lossesHome: team.losses_home,
      winsAway: team.wins_away,
      winsHome: team.wins_home,
    }));

    await this.teamsService.createBulk(teams);

    this.logger.log('End teams seeding');
  }
}
