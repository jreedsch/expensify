import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return () => {     //return a function
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
};

export const startLogout = () => {
  return () => {  //return a function
    return firebase.auth().signOut();
  }
}

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const logout = () => ({
  type: 'LOGOUT'
})
