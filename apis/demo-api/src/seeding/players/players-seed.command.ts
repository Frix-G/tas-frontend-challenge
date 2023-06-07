import { Logger } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';
import csv from 'csvtojson';
import { createReadStream } from 'fs';
import { PlayersService } from '../../players';
import { IRawPlayer } from './raw-player.interface';

@Command({
  name: 'players-seed',
  description: '',
})
export class PlayersSeedCommand extends CommandRunner {
  private logger: Logger = new Logger(PlayersSeedCommand.name);

  constructor(private readonly playersService: PlayersService) {
    super();
  }

  async run(): Promise<void> {
    this.logger.log('Start players seeding');

    const filename = `${__dirname}/players-data.csv`;
    const stream = createReadStream(filename);
    const rawPlayers: Array<IRawPlayer> = (await csv().fromStream(
      stream,
    )) as Array<IRawPlayer>;

    for await (const rawPlayer of rawPlayers) {
      await this.playersService.create(
        {
          fullName: rawPlayer.full_name,
          age: rawPlayer.age,
          position: rawPlayer.position,
          goalsOverall: rawPlayer.goals_overall,
          minutesPlayedOverall: rawPlayer.minutes_played_overall,
        },
        rawPlayer['Current Club'],
      );
    }

    this.logger.log('End players seeding');
  }
}
