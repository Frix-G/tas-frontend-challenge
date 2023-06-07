import { CountryEnum } from 'types';

export interface IRawTeam {
  team_name: string;
  common_name: string;
  season: string;
  country: CountryEnum;
  matches_played: number;
  matches_played_home: number;
  matches_played_away: number;
  suspended_matches: number;
  wins: number;
  wins_home: number;
  wins_away: number;
  draws: number;
  draws_home: number;
  draws_away: number;
  losses: number;
  losses_home: number;
  losses_away: number;
}
