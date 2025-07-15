import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mobile-container bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-inkdarkest mb-4">I Mirror</h1>
        <div className="w-16 h-16 border-4 border-[#74a4ee] border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};