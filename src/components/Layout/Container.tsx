import React from 'react';
export interface ContainerProps {
  children: React.ReactElement;
}

export const Container = ({ children }: ContainerProps): React.ReactElement => {
  return (
    <main>
      <div className="sm:w-full md:w-1/2 mx-auto px-6 h-fit">{children}</div>
    </main>
  );
};
