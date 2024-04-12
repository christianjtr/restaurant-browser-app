import React from 'react';
export interface ContainerProps {
  children: React.ReactElement;
}

export const Container = ({ children }: ContainerProps): React.ReactElement => {
  return (
    <main>
      <div className="sm:w-1/2 md:container mx-auto px-6 h-fit">{children}</div>
    </main>
  );
};
