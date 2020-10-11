import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';



export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())

  }

    return (
      <>
        {/*Menú desplegable de perfil */}
        <div className="relative ml-3">
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-outline"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
          {/*
                      ProfileDropdown panel, show/hide based on dropdown state.
                    */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
              <div
                className="py-1 bg-white rounded-md shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="/auth/login"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                  role="menuitem"
                >
                  Perfil
                </a>

                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                  role="menuitem"
                >
                  Configuracion
                </a>

                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm text-left text-gray-700 transition duration-150 ease-in-out border-none hover:bg-gray-100"
                  role="menuitem"
                >
                  Salir
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </>
    );
}
