import { CountryEnum } from '../common';

export interface ITeam {
  id: number;
  name: string;
  commonName: string;
  season: string;
  country: CountryEnum;
  matchesPlayed: number;
  wins: number;
  winsHome: number;
  winsAway: number;
  losses: number;
  lossesHome: number;
  lossesAway: number;
}

export type ICreateTeam = Omit<ITeam, 'id'>;
