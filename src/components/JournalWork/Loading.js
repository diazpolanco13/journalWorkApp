import React from "react";
import logo from '../../assets/img/logo192.png'


export const Loading = () => {
  return (
    <div>
       <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center px-5 py-2 border rounded-lg">
          <div className="mt-2 text-xs font-light text-center text-white">
            <div>
               <img className="w-32 mx-auto" src={logo} alt="diario" />
            </div>
            Espere por favor...
          </div>
        </div>
      </div>
      
    </div>
  );
};