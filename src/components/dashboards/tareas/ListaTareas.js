import React, { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";

export const ListaTareas = () => {

    const { isOn, setIsOn } = useContext(TransitionContext);
    
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
            <li>
              <a
                href="/"
                className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                          Ricardo Cooper
                        </div>
                        <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                          {/* Heroicon name: mail */}
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="truncate">
                            ricardo.cooper@example.com
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            Applied on
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                            {/* Heroicon name: check-circle */}
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li className="border-t border-gray-200">
              <a
                href="/"
                className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                          Kristen Ramos
                        </div>
                        <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                          {/* Heroicon name: mail */}
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="truncate">
                            kristen.ramos@example.com
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            Applied on
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                            {/* Heroicon name: check-circle */}
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li className="border-t border-gray-200">
              <a
                href="/"
                className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                          Ted Fox
                        </div>
                        <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                          {/* Heroicon name: mail */}
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="truncate">ted.fox@example.com</span>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            Applied on
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                            {/* Heroicon name: check-circle */}
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
