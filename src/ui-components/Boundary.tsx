import React from 'react';

export const Boundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      data-testid="home-page"
      className="bg-white mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8 flex justify-center flex-col"
    >
      {children}
    </div>
  );
};
