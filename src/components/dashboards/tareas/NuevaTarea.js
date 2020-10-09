import React, { useContext } from "react";
import { Transition } from "@headlessui/react";
import { ListaTareas } from "./ListaTareas";
import { TransitionContext } from "../../context/TransitionContext";

export const NuevaTarea = () => {

    const {isOn, setIsOn} = useContext(TransitionContext);
  

  return (
    <>
      <div className="flex ">
        <div className="absolute inset-0 flex-1 w-full overflow-hidden ">
          <ListaTareas />
          <section className="absolute inset-y-0 right-0 flex-1 max-w-full pl-16 ">
            {/*Slide-over panel, show/hide based on slide-over state.*/}
            <Transition
              show={isOn}
              appear={true}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
                  <div className="flex-1 h-0 overflow-y-auto">
                    <header className="px-4 py-6 space-y-1 bg-gray-900 sm:px-6">
                      <div className="flex items-center justify-between space-x-3">
                        <h2 className="text-lg font-medium leading-7 text-white">
                          Nueva tarea
                        </h2>
                        <div className="flex items-center h-7">
                          <button
                            onClick={() => setIsOn(!isOn)}
                            aria-label="Close panel"
                            className="p-1 text-indigo-200 transition duration-150 ease-in-out bg-gray-900 hover:text-white"
                          >
                            {/* Heroicon name: x */}
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
                      <div>
                        <p className="text-sm leading-5 text-indigo-300">
                          Por favor ingrese la informacion para gestionar su
                          nueva tarea
                        </p>
                      </div>
                    </header>
                    <div className="flex flex-col justify-between flex-1">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="pt-6 pb-5 space-y-6">
                          <div className="space-y-1">
                            <label
                              htmlFor="project_name"
                              className="block text-sm font-medium leading-5 text-gray-900"
                            >
                              Título de la tarea
                            </label>
                            <div className="relative rounded-md shadow-sm">
                              <input
                                id="project_name"
                                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium leading-5 text-gray-900"
                            >
                              Descripción
                            </label>
                            <div className="relative rounded-md shadow-sm">
                              <textarea
                                id="description"
                                rows="4"
                                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                              ></textarea>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-sm font-medium leading-5 text-gray-900">
                              Funcionarios asignados
                            </h3>
                            <div>
                              <div className="flex space-x-2">
                                <a
                                  href="/"
                                  className="transition duration-150 ease-in-out rounded-full hover:opacity-75 focus:outline-none focus:shadow-outline"
                                >
                                  <img
                                    className="inline-block w-8 h-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Tom Warner"
                                  />
                                </a>

                                <a
                                  href="/"
                                  className="transition duration-150 ease-in-out rounded-full hover:opacity-75 focus:outline-none focus:shadow-outline"
                                >
                                  <img
                                    className="inline-block w-8 h-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                                    alt="Brandon Rogers"
                                  />
                                </a>
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out border-2 border-gray-200 border-dashed rounded-full hover:text-gray-500 hover:border-gray-300 focus:text-gray-500 focus:border-gray-300 focus:outline-none"
                                  aria-label="Add team member"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <fieldset className="space-y-2">
                            <legend className="text-sm font-medium leading-5 text-gray-900">
                              Privacidad
                            </legend>
                            <div className="space-y-5">
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input
                                    id="privacy_public"
                                    aria-describedby="privacy_public_description"
                                    type="radio"
                                    name="privacy"
                                    className="w-4 h-4 text-gray-600 transition duration-150 ease-in-out form-radio"
                                  />
                                </div>
                                <div className="text-sm leading-5 pl-7">
                                  <label
                                    htmlFor="privacy_public"
                                    className="font-medium text-gray-900"
                                  >
                                    Privado
                                  </label>
                                  <p
                                    id="privacy_public_description"
                                    className="text-gray-500"
                                  >
                                    Solo usted puede ver la tarea
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id="privacy_private-to-project"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      name="privacy"
                                      className="w-4 h-4 text-gray-600 transition duration-150 ease-in-out form-radio"
                                    />
                                  </div>
                                  <div className="text-sm leading-5 pl-7">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="font-medium text-gray-900"
                                    >
                                      Público
                                    </label>
                                    <p
                                      id="privacy_private-to-project_description"
                                      className="text-gray-500"
                                    >
                                      Los miembros del equipo pueden ver la
                                      tarea
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <div className="mt-6 mb-4 ml-4 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                             htmlFor="cover_photo"
                              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Foto
                            </label>
                            <div className="mt-2 sm:mt-0 sm:col-span-2">
                              <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="text-center">
                                  <svg
                                    className="w-12 h-12 mx-auto text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="mt-1 text-sm text-gray-600">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                                    >
                                      Subir archivo
                                    </button>
                                  </p>
                                  <p className="mt-1 text-xs text-gray-500">
                                    PNG, JPG, GIF Menor a 10MB
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end flex-shrink-0 px-4 py-4 space-x-4">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      >
                        Cancelar
                      </button>
                    </span>
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gay-700 focus:shadow-outline-indigo active:bg-gray-700"
                      >
                        Guardar
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </Transition>
          </section>
        </div>
      </div>
    </>
  );
};
