import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import logo from "../../assets/img/logo.png";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const initialForm = {
    email: "diazpolanco13@gmail.com",
    password: "123456",
  };
  const [formValues, handleInputChange] = useForm(initialForm);

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(123123213, "Carlos"));
  };

  return (
    <>
      <div className="flex flex-col justify-center min-w-full min-h-full py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="w-32 mx-auto" src={logo} alt="diario" />
          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Inicia sesión con tu cuenta
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-left text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-left text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                  />
                  <label
                    htmlFor="remember_me"
                    className="block ml-2 text-sm leading-5 text-gray-900"
                  >
                    Recuerdame
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <a
                    href="/auth/"
                    className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Incio de sesión
                  </button>
                </span>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 text-gray-500 bg-white">
                    Ó continua con
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div>
                  <span className="inline-flex w-full rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
                      aria-label="Sign in with Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </div>

                <div>
                  <span className="inline-flex w-full rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
                      aria-label="Sign in with Twitter"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                  </span>
                </div>

                <div>
                  <span className="inline-flex w-full rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
                      aria-label="Sign in with Google"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M9.447,14.121
                            c-0.603,0.293-1.252,0.324-1.503,0.324c-0.048,0-0.075,0-0.075,0s-0.023,0-0.054,0c-0.392,0-2.343-0.09-2.343-1.867
                            c0-1.746,2.125-1.883,2.776-1.883h0.017c-0.376-0.502-0.298-1.008-0.298-1.008C7.934,9.689,7.886,9.691,7.827,9.691
                            c-0.245,0-0.718-0.039-1.124-0.301c-0.498-0.32-0.75-0.865-0.75-1.619c0-2.131,2.327-2.217,2.35-2.219h2.324v0.051
                            c0,0.26-0.467,0.311-0.785,0.354C9.734,5.973,9.517,5.994,9.456,6.025c0.589,0.315,0.684,0.809,0.684,1.545
                            c0,0.838-0.328,1.281-0.676,1.592C9.248,9.355,9.079,9.506,9.079,9.709c0,0.199,0.232,0.402,0.502,0.639
                            c0.441,0.389,1.046,0.918,1.046,1.811C10.627,13.082,10.23,13.742,9.447,14.121z M14.5,10H13v1.5h-1V10h-1.5V9H12V7.5h1V9h1.5V10z
                            M8.223,11.15c-0.052,0-0.104,0.002-0.157,0.006c-0.444,0.033-0.854,0.199-1.15,0.469c-0.294,0.266-0.444,0.602-0.423,0.941
                            c0.045,0.711,0.808,1.127,1.735,1.061c0.912-0.066,1.52-0.592,1.476-1.303C9.662,11.656,9.081,11.15,8.223,11.15z M9.097,7.285
                            c-0.242-0.85-0.632-1.102-1.238-1.102c-0.065,0-0.131,0.01-0.194,0.027C7.402,6.285,7.193,6.504,7.077,6.83
                            C6.958,7.16,6.951,7.504,7.053,7.896c0.185,0.701,0.683,1.209,1.185,1.209c0.066,0,0.132-0.008,0.194-0.027
                            C8.981,8.924,9.325,8.086,9.097,7.285z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-lg font-medium text-blue-900 hover:text-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
              <Link to="/auth/register">Crea una nueva cuenta</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
