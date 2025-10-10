import React from "react";
import logoLoadingScreen from '../assets/logo-loading-screen.png';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B5EFF]">
      <div className="flex flex-col items-center gap-4">
        <img src={logoLoadingScreen} alt="Loading..." className="w-193 h-80 animate-bounce" />
      </div>
    </div>
  );
};

export default LoadingScreen;