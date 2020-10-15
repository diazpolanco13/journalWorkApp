import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { startGoogleLogin } from "../../actions/auth";
import { startLoginEmailPassword } from "../../actions/auth";
import logo from "../../assets/img/logo.png";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.ui)

  const initialForm = {
    email: "",
    password: "",
  };
  const [formValues, handleInputChange] = useForm(initialForm);

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  // const handleGoogleLogin = () => {
  //   dispatch(startGoogleLogin());
  // };

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
                    disabled={loading}
                    className={
                      loading
                        ? `cursor-not-allowed flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-indigo-700`
                        : `"flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-indigo-700"`
                    }
                  >
                    Incio de sesión
                  </button>
                </span>
              </div>
            </form>

            <div className="inline-flex justify-center w-full px-4 py-2 mt-3 text-lg font-bold leading-5 text-gray-500 transition duration-150 ease-in-out bg-white rounded-md hover:text-blue-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue">
              <Link to="/auth/register">Crea una nueva cuenta</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
