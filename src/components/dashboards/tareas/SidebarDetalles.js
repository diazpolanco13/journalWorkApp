import { Transition } from "@headlessui/react";
import React, { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import notImage from "../../../assets/img/sin_imagen.png";
import { useSelector } from "react-redux";
import moment from "moment";
import 'moment/locale/es';


export const SidebarDetalles = () => {
    const { detallesOn, setDetallesOn } = useContext(TransitionContext);
    const { setIsOn } = useContext(TransitionContext);
    const { active: note } = useSelector(state => state.notes)
    
    
    const { date, description, imageUrl, complete, title } = note || {}
    
    
    const noteDate = moment(date);

    

    const handleEdition = () => {
      setIsOn(true)
      setDetallesOn(false)

    }
    
  return (
    <div>
      <section className="absolute inset-y-0 right-0 flex max-w-full pl-0 sm:pl-0">
        <Transition
          show={detallesOn}
          appear={true}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="w-screen max-w-md">
            <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
              <header className="px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="text-lg font-medium leading-7 text-gray-900">
                    Detalles
                  </h2>
                  <div className="flex items-center h-7">
                    <button
                      onClick={() => setDetallesOn(!detallesOn)}
                      aria-label="Close panel"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                    >
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              {/* Main */}
              <div>
                <div className="pb-1 sm:pb-6">
                  <div className="space-y-6">
                    <div className="relative h-40 sm:h-56">
                      {
                        imageUrl
                        ? <img
                        className="absolute object-cover w-full h-full"
                        src={imageUrl}
                        alt=""
                          /> :
                          <img
                        className="absolute object-cover w-full h-full"
                        src={notImage}
                        alt=""
                      />
                      }
                    </div>
                    <div className="px-4 space-y-6 sm:-mt-8 sm:flex sm:items-end sm:px-6 sm:space-x-6">
                      <div className="space-y-5 sm:flex-1">
                        <div>
                          <div className="flex items-center space-x-2.5">
                            <h4 className="text-lg font-bold leading-7 text-gray-900 sm:text-lg sm:leading-8">
                              {title}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-wrap">
                          <span className="inline-flex flex-shrink-0 w-full rounded-md shadow-sm sm:flex-1">
                            <button
                              onClick={handleEdition}
                              type="button"
                              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700"
                            >
                              Editar
                            </button>
                          </span>
                          <span className="inline-flex flex-1 w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:ml-3">
                            <button
                              type="button"
                              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-gray-300 rounded-md hover:bg-red-500 focus:outline-none focus:border-red-300 focus:shadow-outline-blue active:text-red-800 active:bg-red-50"
                            >
                              Eliminar
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                  <dl className="px-4 space-y-8 sm:px-6 sm:space-y-6">
                    <div className="space-y-1">
                      <dt className="text-sm font-medium leading-5 text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Descripción:
                      </dt>
                      <dd className="text-sm leading-5 text-gray-900 sm:col-span-2">
                        <p>
                        {description}
                        </p>
                      </dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium leading-5 text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Fecha:
                      </dt>
                      <dd className="text-sm leading-5 text-gray-900 sm:col-span-2">
                        { 
                          noteDate.format("LLL")
                        }
                      </dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium leading-5 text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Estatus:
                      </dt>
                      {
                        complete
                        ? <dd className="text-sm leading-5 text-green-600 sm:col-span-2">
                            Completada
                      </dd>
                          : <dd className="text-sm leading-5 text-red-600 sm:col-span-2">
                          No Completada
                    </dd>

                      }
                      
                    </div>
                    <div className="space-y-1">
                      <dt className="mb-2 text-sm font-medium leading-5 text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Asignado:
                      </dt>
                      <div className="flex flex-row">
                        <a
                          href="/"
                          className="flex-shrink-0 block group focus:outline-none"
                        >
                          <div className="flex items-center">
                            <div>
                              <img
                                className="inline-block rounded-full h-9 w-9"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">
                                Carlos Diaz
                              </p>
                              <p className="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700 group-focus:underline">
                                Ver perfil
                              </p>
                            </div>
                          </div>
                        </a>
                        
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </section>
    </div>
  );
};

export default SidebarDetalles;
