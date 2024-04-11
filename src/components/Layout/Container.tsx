import React from 'react';

export interface ContainerProps {
  children: React.ReactElement;
}

export const Container = ({ children }: ContainerProps): React.ReactElement => {
  return (
    <main>
      <div className="container mx-auto">{children}</div>
    </main>
  );
};
