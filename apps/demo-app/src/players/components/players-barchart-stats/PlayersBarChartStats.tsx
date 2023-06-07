import { FunctionComponent, memo, useMemo } from 'react';
import { IPlayer } from 'types';
import { ResponsiveBar } from '@nivo/bar';

export interface PlayersBarChartStatsProps {
  data: Array<IPlayer>;
}

export const PlayersBarChartStats: FunctionComponent<PlayersBarChartStatsProps> =
  memo(({ data }) => {
    const chartData = useMemo(() => {
      return data.map((player) => ({
        name: player.fullName,
        'Minutes Played Overall': player.minutesPlayedOverall,
        'Minutes Played OverallColor': 'hsl(251, 70%, 50%)',
      }));
    }, [data]);

    return (
      <ResponsiveBar
        data={chartData}
        keys={['Minutes Played Overall']}
        indexBy="name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        groupMode="grouped"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Player',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Minutes played',
          legendPosition: 'middle',
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 50,
            translateY: 30,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Top 3 stats"
      />
    );
  });

PlayersBarChartStats.displayName = 'PlayersBarChartStats';
