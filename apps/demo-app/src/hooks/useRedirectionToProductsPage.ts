import { useRouter } from 'next/router';

export const useRedirectionToProductsPage = () => {
  const { push } = useRouter();

  return {
    redirectToProductsPage: () => {
      push('/products');
    },
  };
};
