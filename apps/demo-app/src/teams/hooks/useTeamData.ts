import { useQuery, UseQueryResult } from 'react-query';
import { ITeam } from 'types';
import { teamsService } from '@/teams';
import { ONE_HOUR } from '@/constants';

export const useTeamData = (teamId: string): UseQueryResult<ITeam> => {
  return useQuery(['teams', teamId], () => teamsService.getById(teamId), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: ONE_HOUR,
    select: (response) => response.data,
  });
};
