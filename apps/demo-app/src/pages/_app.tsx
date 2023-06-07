import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/globals.css'; // import { Navbar } from '@/components';
import { Box } from '@mui/material';
import { NavBar } from '@/components';

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <NavBar />
        <Box p={4}>
          <Component {...pageProps} />
        </Box>
      </>
    </QueryClientProvider>
  );
}
