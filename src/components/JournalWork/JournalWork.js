import React, { useState } from "react";
import { SidebarMovil } from "./SidebarMovil";
import { SidebarDesktop } from "./SidebarDesktop";
import { NavBar } from "./NavBar";
import { Vehiculos } from "../dashboards/vehiculos/Vehiculos";
import { Equipo } from "../dashboards/equipo/Equipo";
import { Route, Switch } from "react-router-dom";
import { Historial } from "../dashboards/historial/Historial";
import { Reportes } from "../dashboards/reportes/Reportes";
import { PanelDeTareas } from "../dashboards/tareas/PanelDeTareas";
import { Tablero } from "../dashboards/tablero/Tablero";
import { TransitionContext } from "../context/TransitionContext";

export const JournalWork = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [detallesOn, setDetallesOn] = useState(false);
  const [editOn, setEditOn] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        {/*  El componente <SidebarMovil/> se ocultara cuando la pantalla sea mayor  a  768px (md:hidden)*/}

        <TransitionContext.Provider
          value={{
            showSidebar,
            setShowSidebar,
            isOn,
            setIsOn,
            detallesOn,
            setDetallesOn,
            editOn,
            setEditOn
          }}
        >
          {/*  El componente <SidebarMovil/> se ocultara cuando la pantalla sea menor  a  768px (hidden md:flex)*/}
          <SidebarMovil />

          {/*  El componente <SidebarDesktop/> se mostrara cuando la pantalla sea mayor  a  768px (hidden md:flex)*/}
          <SidebarDesktop />

          <div className="flex flex-col flex-1 w-0 overflow-hidden">
            <NavBar />

              <Switch>
                <Route selected exact path="/" component={Tablero} />
                <Route path="/equipo" component={Equipo} />
                <Route path="/vehiculos" component={Vehiculos} />
                <Route path="/historial" component={Historial} />
                <Route path="/reportes" component={Reportes} />
                <Route path="/tareas" component={PanelDeTareas} />
              </Switch>

          </div>
        </TransitionContext.Provider>
      </div>
    </>
  );
};
