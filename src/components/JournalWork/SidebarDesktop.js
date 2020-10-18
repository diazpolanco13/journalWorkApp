import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";


export const SidebarDesktop = () => {
    return (
      <>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-1 h-0">
              <div className="flex items-center flex-shrink-0 h-16 px-4 bg-gray-900">
                <img className="w-auto h-8" src={logo} alt="POLICE" />
                <h1 className="ml-3 font-extrabold text-white">POLICE</h1>
              </div>
              <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 space-y-1 bg-gray-800">
                  <Link
                    selected
                    to="/"
                    className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 visited:bg-red-900"
                  >
                    {/* Heroicon name: home */}
                    <svg
                      className="w-6 h-6 mr-3 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Tablero
                  </Link>

                  <Link
                    to="/equipo"
                    className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    {/* Heroicon name: users */}
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Equipo
                  </Link>

                  <Link
                    to="/vehiculos"
                    className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    {/* Heroicon name: folder */}
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#fff"
                        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>
                    Vehiculos
                  </Link>

                  <Link
                    to="/tareas"
                    className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    {/* Heroicon name: calendar */}
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Tareas
                  </Link>

                  <Link
                    to="/historial"
                    className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    {/* Heroicon name: inbox */}
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    Historial
                  </Link>

                  <Link
                    to="/reportes"
                    className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    {/* Heroicon name: chart-bar */}
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Reportes
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
