import React from "react";
import { SidebarDeTareas } from "./SidebarDeTareas";
import { SidebarDetalles } from "./SidebarDetalles";
import { SidebarEditNotes } from "./SidebarEditNotes";
import { ListaTareas } from "./ListaTareas";

export const PanelDeTareas = () => {
  console.log('panel de tareas')
  return (
    <>
      <main
        className="relative flex-1 overflow-y-auto focus:outline-none"
        tabIndex="0"
      >
        <div className="pt-2 pb-6 md:py-6">
          <div className="flex ">
            <div className="absolute inset-0 flex-1 w-full overflow-hidden ">
              <ListaTareas />
              <SidebarDetalles />
              <SidebarDeTareas />
              <SidebarEditNotes />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
