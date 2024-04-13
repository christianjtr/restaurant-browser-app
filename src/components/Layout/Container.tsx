import React from 'react';

export interface ContainerProps {
  children: React.ReactElement;
}

export const Container: React.FC<ContainerProps> = ({ children }: ContainerProps): React.ReactElement => {
  return (
    <main>
      <div className="sm:w-full md:w-1/2 mx-auto sm:px-0 h-full">{children}</div>
    </main>
  );
};
