import React, { useContext } from "react";
import vigilanciaCasa from "../../../assets/img/vigilanciaCasa.jpg";
import { TransitionContext } from "../../context/TransitionContext";

export const Tarea = () => {

  const { detallesOn, setDetallesOn } = useContext(TransitionContext);

  return (
    <>
      <li className="border-t border-gray-200">
        <button
          onClick={() => setDetallesOn(!detallesOn)}
          className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
        >
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="flex items-center flex-1 min-w-0">
              <div className="flex-shrink-0 orden-1">
                <img
                  className="w-20 h-20 rounded"
                  src={vigilanciaCasa}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div className="flex-grow w-full orden-2">
                  <div className="text-sm font-medium leading-5 text-left text-blue-600 truncate">
                    Establecer punto de vigilancia y seguimiento a objetivo
                  </div>
                  <p className="mt-1 text-sm leading-5 text-left text-gray-500">
                    Colocar punto de vigilancia al objetivo Pecas, en su
                    residencia y hacer plan de enfrentamiento.
                  </p>
                </div>
                <div className="justify-end flex-shrink hidden w-2/3 md:flex orden-3">
                  <div className="flex-initial ">
                    <div className="text-sm leading-5 text-gray-900">
                      {`Realizado `}
                      <time dateTime="2020-01-07">10 Octubre, 2020</time>
                    </div>
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-500 orden-4">
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
                      Completada
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
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
        </button>
      </li>
    </>
  );
};
