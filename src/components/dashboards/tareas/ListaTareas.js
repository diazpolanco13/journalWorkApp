import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { TransitionContext } from "../../context/TransitionContext";
import { SinTareas } from "./SinTareas";
import { Tarea } from "./Tarea";

export const ListaTareas = () => {

  const { isOn, setIsOn } = useContext(TransitionContext);
  
  const { initialState } = useSelector((state) => state).notes;

 
  const tareas = [1, 2]
    
  return (
    <>
      <div className="flex">
        <div className="w-4/5 m-5 overflow-hidden bg-white shadow ml-7-4 sm:rounded-md">
          {/* Header lista de tareas */}
          <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
            <div className="flex flex-wrap items-center justify-between -mt-2 -ml-4 sm:flex-no-wrap">
              <div className="mt-2 ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Lista de tareas
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Organice sus actividades por tareas y experimente un
                  rendimiento en su trabajo maás efectivo.
                </p>
              </div>
              <div className="flex-shrink-0 mt-2 ml-4">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    onClick={() => setIsOn(!isOn)}
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-indigo focus:border-gray-700 active:bg-gray-700"
                  >
                    Nueva tarea
                  </button>
                </span>
              </div>
            </div>
          </div>
          {/* FIn del header lista de tareas */}

          <ul>
            {
              (initialState.active)
                ? (
                tareas.map((value) => (
                <Tarea key={value} />
              ))
              ) : (
                  <SinTareas />
              )
            }
          </ul>
        </div>
      </div>
    </>
  );
};
