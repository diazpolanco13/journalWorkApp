import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useForm } from "../../hooks/useForm";
import { Error } from "./Error";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWhithPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state).ui;

  const initialForm = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWhithPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Nombre es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Esto no es un Email"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("Las contraseñas no son iguales"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("La contraseña es menor a 6 caracteres"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <div className="flex flex-col justify-center min-w-full min-h-full py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="w-32 mx-auto" src={logo} alt="diario" />

          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Registrate con tus datos
          </h2>
        </div>
        {msgError && <Error />}

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleRegister}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-left text-gray-700"
                >
                  Nombres
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    placeholder="Nombre completo"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mt-2 text-sm font-medium leading-5 text-left text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={email}
                    onChange={handleInputChange}
                    name="email"
                    type="text"
                    placeholder="Correo electronico"
                    autoComplete="off"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-2">
                <div className="mt-1 rounded-md shadow-sm">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-left text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    value={password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={password2}
                    onChange={handleInputChange}
                    name="password2"
                    type="password"
                    placeholder="Repita su contraseña"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:blue-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Registrarse
                  </button>
                </span>
              </div>
            </form>

            <div className="inline-flex justify-center w-full px-4 py-2 mt-3 text-lg font-bold leading-5 text-gray-500 transition duration-150 ease-in-out bg-white rounded-md hover:text-blue-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue" >
              <Link to="/auth/login">Iniciar sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
