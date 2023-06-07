import { useQuery, UseQueryResult } from 'react-query';
import { ITeam } from 'types';
import { ONE_HOUR } from '@/constants';
import { teamsService } from '@/teams/teams.service';

export const useTeams = (): UseQueryResult<Array<ITeam>> => {
  return useQuery(['teams'], () => teamsService.getAll(), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: ONE_HOUR,
    select: (response) => response.data,
  });
};
