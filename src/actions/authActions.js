import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./uiActions";

export const startLoginEmailPassword = (email, password) => {

 
  return (dispatch) => {

    dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName, user.email)
        );
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
        })
      }); 
  };
};

export const startRegisterWhithPasswordName = (email, password, name) => {
  return (dispatch) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
        await user.updateProfile({ displayName:name })

      
      dispatch(login(user.uid, user.displayName, user.email));
      })
      .catch(error => {

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        })
      })
  }
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName, email) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    email
  },
});


export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})