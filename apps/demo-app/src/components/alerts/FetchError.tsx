import { FunctionComponent, memo } from 'react';
import { Alert } from '@mui/material';

export interface FetchErrorProps {
  customMessage?: string;
}

export const FetchError: FunctionComponent<FetchErrorProps> = memo(
  ({ customMessage }) => {
    return (
      <Alert severity="error">
        {customMessage ||
          'Something went wrong, please try to reload in few moments!'}
      </Alert>
    );
  },
);

FetchError.displayName = 'FetchError';
