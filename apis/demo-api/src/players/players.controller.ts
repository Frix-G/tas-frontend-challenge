import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';
import { IPlayer } from 'types';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('top3-by-team-id/:id')
  top3(@Param('id') id: number): Promise<Array<IPlayer>> {
    return this.playersService.getTop3ByTeamId(id);
  }
}
