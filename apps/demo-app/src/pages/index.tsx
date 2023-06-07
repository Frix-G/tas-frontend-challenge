import Head from 'next/head';
import { TeamsTable } from '@/teams';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Space football</title>
        <meta name="description" content="tas-frontend-challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={4}>
        <TeamsTable />
      </Box>
    </>
  );
}
