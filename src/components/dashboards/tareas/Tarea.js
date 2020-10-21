import React, { useContext } from "react";
import moment from "moment";
import notImage from "../../../assets/img/sin_imagen.png";
import { TransitionContext } from "../../context/TransitionContext";
import { useDispatch } from "react-redux";
import { activeNote } from "../../../actions/notesAction";


export const Tarea = ({ id, date, description, imageUrl, complete, title }) => {
  const { setDetallesOn } = useContext(TransitionContext);

  
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    setDetallesOn(true)
    dispatch( 
        activeNote( id, {
            date, title, description, imageUrl, complete
        })
    );
}
  
  return (
    <>
      <li className="border-t border-gray-200">
        <div
          onClick={handleEntryClick}
          className="block transition duration-150 ease-in-out cursor-pointer hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
        >
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="flex items-center flex-1 min-w-0">
              {imageUrl ? (
                <div className="flex-shrink-0 orden-1">
                  <img
                    className="w-20 h-20 rounded"
                    src={`${imageUrl}`}
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 orden-1">
                  <img
                    className="w-20 h-20 rounded"
                    src={`${notImage}`}
                    alt=""
                  />
                </div>
              )}

              <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-3 md:gap-4">
                <div className="col-span-2 orden-2">
                  <div className="text-sm font-medium leading-5 text-left text-blue-600 truncate">
                    {title}
                  </div>
                  <p className="h-16 overflow-hidden text-sm leading-5 text-left text-gray-500 mt-18">
                    {description}
                  </p>
                </div>
                <div className="items-center justify-center flex-shrink hidden min-w-0 sm:hidden md:flex orden-3">
                  <div className="flex-initial ">
                    <div className="text-sm leading-5 text-left text-gray-900">
                      {`Creación: `}
                      <time dateTime="Fecha">{noteDate.format("L")}</time>
                    </div>
                      {/* Heroicon name: check-circle */}

                      {
                        complete
                          ? (
                        <div className="flex items-center mt-2 text-sm leading-5 text-gray-500 orden-4">
                          <svg
                            className="w-6 h-6 text-green-500 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2"> Completada</span>
                        </div>
                        ) : (
                          <div className="flex items-center mt-2 text-sm leading-5 text-gray-500 orden-4">
                            {/* Heroicon name: check-circle */}
                            <svg
                              className="w-6 h-6 text-red-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="ml-2"> No completada</span>
                          </div>
                        )
                      }
                      </div>
                  </div>
              </div>
            </div>

            <div className="">
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
        </div>
      </li>
    </>
  );
};
