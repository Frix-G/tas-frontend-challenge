import { Injectable, Logger } from '@nestjs/common';
import { ITeam } from 'types';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  private logger: Logger = new Logger(TeamsService.name);

  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  findAll() {
    return this.teamRepository.find();
  }

  findOne(id: number) {
    return this.teamRepository.findOneOrFail({
      where: { id },
    });
  }

  findByName(name: string) {
    return this.teamRepository.findOneByOrFail({ commonName: name });
  }

  async createBulk(teams: Array<ITeam>) {
    try {
      const entities = teams.map((team) => this.teamRepository.create(team));

      await this.teamRepository.save(entities);
    } catch (e) {
      this.logger.error(`Error while saving teams - ${JSON.stringify(e)}`);
      throw e;
    }
  }
}
