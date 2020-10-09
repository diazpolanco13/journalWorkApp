import React from 'react'
import { SidebarDeTareas } from "./SidebarDeTareas";



export const PanelDeTareas = () => {
  return (
    <>
      <main
        className="relative flex-1 overflow-y-auto focus:outline-none"
        tabIndex="0"
      >
        <div className="pt-2 pb-6 md:py-6">
          <SidebarDeTareas />
        </div>
      </main>
    </>
  );
};
 