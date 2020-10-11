import React from 'react'
import logo from "../../../assets/img/logo.png";


export const SinTareas = () => {
    return (
      <>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-gray-200 border-dashed rounded-lg h-96">
              
              <div className="flex flex-col items-center justify-center flex-shrink-0 h-full px-4 ">
                <img className="w-32 h-32 mt-4" src={logo} alt="SEBIN" />
                <h1 className="mt-2 ml-3 font-extrabold text-gray-500">
                             AGREGUE UNA TAREA
                </h1>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </>
    );
}
