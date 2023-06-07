import { FunctionComponent, useCallback } from 'react';
import { useRedirectToTeamPage, useTeams } from '@/teams/hooks';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { ITeam } from 'types';
import { FetchError } from '@/components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 30 },
  {
    field: 'name',
    headerName: 'Team name',
    width: 180,
  },
  {
    field: 'commonName',
    headerName: 'Common name',
    width: 150,
  },
  {
    field: 'matchesPlayed',
    headerName: 'Matches played',
    width: 140,
  },
  {
    field: 'wins',
    headerName: 'Wins',
    type: 'number',
    width: 100,
  },
  {
    field: 'losses',
    headerName: 'Losses',
    type: 'number',
    width: 100,
  },
];

export const TeamsTable: FunctionComponent = () => {
  const { isLoading, isError, data } = useTeams();
  const { redirectToProductsPage } = useRedirectToTeamPage();

  const onRowClick = useCallback(
    (params: GridRowParams<ITeam>) => {
      redirectToProductsPage(params.id as string);
    },
    [redirectToProductsPage],
  );

  if (isError) {
    return <FetchError />;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={data || []}
        loading={isLoading}
        onRowClick={onRowClick}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          sorting: { sortModel: [{ field: 'name', sort: 'asc' }] },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
