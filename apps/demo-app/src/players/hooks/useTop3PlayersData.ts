import { useQuery, UseQueryResult } from 'react-query';
import { IPlayer } from 'types';
import { ONE_HOUR } from '@/constants';
import { playersService } from '@/players';

export const useTop3PlayersData = (
  teamId: string,
): UseQueryResult<Array<IPlayer>> => {
  return useQuery(
    ['top3-players-by-team', teamId],
    () => playersService.getTop3ByTeamId(teamId),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: ONE_HOUR,
      select: (response) => response.data,
    },
  );
};
