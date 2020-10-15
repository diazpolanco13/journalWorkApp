import React from "react";


export const Loading = () => {
  return (
    <div>
       <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center px-5 py-2 bg-white border rounded-lg">
          <div className="relative block w-20 h-5 mt-2 loader-dots">
            <div className="absolute top-0 w-3 h-3 mt-1 bg-blue-800 rounded-full"></div>
            <div className="absolute top-0 w-3 h-3 mt-1 bg-blue-800 rounded-full"></div>
            <div className="absolute top-0 w-3 h-3 mt-1 bg-blue-800 rounded-full"></div>
            <div className="absolute top-0 w-3 h-3 mt-1 bg-blue-800 rounded-full"></div>
          </div>
          <div className="mt-2 text-xs font-light text-center text-gray-500">
            Espere por favor...
          </div>
        </div>
      </div>
      
    </div>
  );
};