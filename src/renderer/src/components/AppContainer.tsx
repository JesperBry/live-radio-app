import React from 'react';

interface Props {
  children: React.ReactNode;
  imgSrc: string;
}

const AppContainer = ({ children, imgSrc }: Props) => {
  return (
    <div
      className={`w-full h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-2xl bg-neutral-800/90">
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
