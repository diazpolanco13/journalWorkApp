import React, { useState } from 'react'
import { SidebarMovil } from './SidebarMovil';
import { SidebarDesktop } from './SidebarDesktop';
import { NavBar } from './NavBar';
import { Main } from './Main';


export const Dashboard = () => {

  const [showSidebar, setShowSidebar] = useState(false);


    return (
      <>
        <div className="flex h-screen overflow-hidden bg-gray-100">
          {/*  El componente <SidebarMovil/> se ocultara cuando la pantalla sea mayor  a  768px (md:hidden)*/}
          <SidebarMovil
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          />

          {/*  El componente <SidebarDesktop/> se ocultara cuando la pantalla sea menor  a  768px (hidden md:flex)*/}
          <SidebarDesktop />

          <div className="flex flex-col flex-1 w-0 overflow-hidden">
            <NavBar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
            <Main/> 
          </div>
        </div>
      </>
    );
}
