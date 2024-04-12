import React from 'react';

export interface LoaderSpinnerProps {
  message?: string;
}

export const LoaderSpinner = (props: LoaderSpinnerProps): React.ReactElement => {
  const { message = 'Loading' } = props;

  return (
    <div className="flex flex-col items-center h-lvh justify-center">
      <span className="loading loading-spinner loading-lg color--base"></span>
      <span className="my-3 color--base text-lg">{message}</span>
    </div>
  );
};
