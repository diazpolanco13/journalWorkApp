import React, { useState } from 'react'
import { SidebarMovil } from './SidebarMovil';
import { SidebarDesktop } from './SidebarDesktop';
import { NavBar } from './NavBar';
import { Vehiculos } from "../dashboards/Vehiculos";
import { Equipo } from "../dashboards/Equipo";
import { Link, Route, Router} from 'react-router-dom';
import { Switch } from '@headlessui/react';
import { Historial } from '../dashboards/Historial';
import { Reportes } from '../dashboards/Reportes';
import { Tareas } from '../dashboards/Tareas';
import { Tablero } from '../dashboards/Tablero';


export const JournalWork = () => {
  
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
          
          <>
            <Route
                exact
                path="/"
                component={Tablero}
              />
              <Route
                path="/equipo"
                component={Equipo}
              />
              <Route
                path="/vehiculos"
                component={Vehiculos}
              />
              <Route
                path="/historial"
                component={Historial}
              />
              <Route
                path="/reportes"
                component={Reportes}
              />
              <Route
                path="/tareas"
                component={Tareas}
              />
          </>
        </div>
      </div>
    </>
  );
};
