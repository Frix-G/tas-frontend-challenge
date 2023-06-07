import { CountryEnum } from '../common';

export interface ITeam {
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
