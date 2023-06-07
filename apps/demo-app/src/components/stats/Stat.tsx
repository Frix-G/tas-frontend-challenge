import { FunctionComponent, memo } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export interface StatProps {
  title: string;
  data: number | string;
}

export const Stat: FunctionComponent<StatProps> = memo(({ title, data }) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
});

Stat.displayName = 'Stat';
