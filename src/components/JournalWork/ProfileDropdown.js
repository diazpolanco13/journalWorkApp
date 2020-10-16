import React from 'react'
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authActions';



export const ProfileDropdown = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())

  }

    return (
    <>
      <div className="relative ml-3">
        <Menu>
          {({ open }) => (
           <>
              <span>
                <Menu.Button
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
                </Menu.Button>
              </span>

          
              <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  >
                  
                  <Menu.Items
                    className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div
                      className="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                              <a
                                href="/auth/login"
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Perfil
                              </a>
                            )}
                          </Menu.Item>
                      </div>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                              <a
                                href="/"
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                role="menuitem"
                              >
                                Configuracion
                              </a>
                            )}
                          </Menu.Item>
                      </div>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                                onClick={handleLogout}
                                href="/auth/login"
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                role="menuitem"
                              >
                                Salir
                              </a>
                            )}
                          </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
              </Transition>
            </>
          )}
          </Menu>
        </div>
      </>
    );
}
