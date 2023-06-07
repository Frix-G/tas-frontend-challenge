import { FunctionComponent, memo } from 'react';
import { IPlayer } from 'types';
import { Card, CardContent, Typography } from '@mui/material';

export interface PlayerCardProps {
  data: IPlayer;
}

export const PlayerCard: FunctionComponent<PlayerCardProps> = memo(
  ({ data }) => {
    return (
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Goals overall: {data.goalsOverall}
          </Typography>
        </CardContent>
      </Card>
    );
  },
);

PlayerCard.displayName = 'PlayerCard';
