import { api } from '@/axios';
import { IPlayer } from 'types';
import { AxiosResponse } from 'axios';

export class PlayersService {
  private readonly baseUrl: string = 'players/';

  getTop3ByTeamId(id: string): Promise<AxiosResponse<Array<IPlayer>>> {
    return api.get<Array<IPlayer>>(`${this.baseUrl}top3-by-team-id/${id}`);
  }
}

export const playersService = new PlayersService();
