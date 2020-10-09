import React from 'react'
import { NuevaTarea } from './NuevaTarea'



export const Tareas = () => {


  return (
    <>
      <main
        className="relative flex-1 overflow-y-auto focus:outline-none"
        tabIndex="0"
      >
        <div className="pt-2 pb-6 md:py-6">
             <NuevaTarea />
        </div>
      </main>
    </>
  );
};
 