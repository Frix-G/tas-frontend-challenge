import { FunctionComponent, memo } from 'react';
import { useTeamData } from '@/teams';
import {
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { FetchError, Stat } from '@/components';
import { useTop3PlayersData } from '@/players/hooks';
import { PlayerCard, PlayersBarChartStats } from '@/players';

export interface TeamDetailsProps {
  teamId: string;
}

export const TeamDetails: FunctionComponent<TeamDetailsProps> = memo(
  ({ teamId }) => {
    const { isLoading, isError, data } = useTeamData(teamId);
    const {
      data: top3Players,
      isLoading: top3IsLoading,
      isError: top3IsError,
    } = useTop3PlayersData(teamId);

    if (isLoading || top3IsLoading) {
      return <CircularProgress color="secondary" />;
    }

    if (isError || top3IsError) {
      return <FetchError />;
    }

    if (!data || !top3Players) {
      return null;
    }

    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box width="100%" maxWidth="md">
          <Typography variant="h2" gutterBottom>
            {data.commonName}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Box
            display="flex"
            gap={2}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Stack gap={2} flexGrow={1}>
              <Typography variant="h4" gutterBottom>
                Team stats
              </Typography>

              <Stat title="Matches played" data={data.matchesPlayed} />
              <Stat title="Wins" data={data.wins} />
              <Stat title="Wins home" data={data.winsHome} />
              <Stat title="Wins away" data={data.winsAway} />
              <Stat title="Losses" data={data.losses} />
              <Stat title="Losses home" data={data.lossesHome} />
              <Stat title="Losses away" data={data.lossesAway} />
              <Stat title="Country" data={data.country} />
            </Stack>
            <Stack gap={2}>
              <Typography variant="h4" gutterBottom>
                Top 3 of players
              </Typography>
              {top3Players.map((player) => (
                <PlayerCard key={player.fullName} data={player} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box width="100%" height={400}>
          <PlayersBarChartStats data={top3Players} />
        </Box>
      </Box>
    );
  },
);

TeamDetails.displayName = 'TeamDetails';
