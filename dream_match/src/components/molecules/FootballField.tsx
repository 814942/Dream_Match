import React from 'react';

const FootballField: React.FC = () => {
  return (
    <div className="relative w-11/12 m-auto h-screen bg-green">
      {/* Lines */}
      <div className="absolute inset-0 border-4 border-white"></div>
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2"></div>
      
      {/* Center Circle */}
      <div className="absolute left-1/2 top-1/2 w-24 h-24 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Penalty Areas */}
      <div className="absolute left-0 top-1/4 h-1/2 w-24 border-2 border-white"></div>
      <div className="absolute right-0 top-1/4 h-1/2 w-24 border-2 border-white"></div>
      
      {/* Goals */}
      <div className="absolute left-0 top-1/3 h-1/3 w-4 border-2 border-white"></div>
      <div className="absolute right-0 top-1/3 h-1/3 w-4 border-2 border-white"></div>
    </div>
  );
};

export default FootballField;
