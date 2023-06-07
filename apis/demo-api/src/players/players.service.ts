import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities';
import { ICreatePlayer, IPlayer } from 'types';
import { TeamsService } from '../teams/teams.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    private readonly teamsService: TeamsService,
  ) {}

  async create(player: ICreatePlayer, teamName: string): Promise<void> {
    const team = await this.teamsService.findByName(teamName);
    const entity = this.playerRepository.create({ ...player, team });

    await this.playerRepository.save(entity);
  }

  getTop3ByTeamId(teamId: number): Promise<Array<IPlayer>> {
    return this.playerRepository.find({
      where: {
        team: {
          id: teamId,
        },
      },
      order: { goalsOverall: 'desc' },
      take: 3,
    });
  }
}
