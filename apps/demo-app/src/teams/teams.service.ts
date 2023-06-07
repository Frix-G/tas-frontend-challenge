import { api } from '@/axios';
import { ITeam } from 'types';

export class TeamsService {
  private readonly baseUrl: string = 'teams/';

  getById(id: string) {
    return api.get<ITeam>(`${this.baseUrl}${id}`);
  }

  getAll() {
    return api.get<Array<ITeam>>(this.baseUrl, {});
  }
}

export const teamsService = new TeamsService();
