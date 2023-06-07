import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('top3-by-team-id/:id')
  top3(@Param('id') id: number) {
    return this.playersService.getTop3ByTeamId(id);
  }
}
