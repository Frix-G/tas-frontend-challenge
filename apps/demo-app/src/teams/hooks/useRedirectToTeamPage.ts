import { useRouter } from 'next/router';

export const useRedirectToTeamPage = () => {
  const { push } = useRouter();

  return {
    redirectToProductsPage: (teamId: string | number) => {
      push(`/teams/${teamId}`);
    },
  };
};
