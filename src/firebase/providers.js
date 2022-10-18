//proveedor de los servicios de autenticacion
import { ErrorOutlineTwoTone } from "@mui/icons-material";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
//Auntenticarme con google
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log({ credentials });
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(error)
    return {
      ok: false,
      errorMessage,
    };
  }
};

//proveedor de auntenticacion con contrasena y email
export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    // console.log({email, password, displayName})
    //llegar a firebase
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    // console.log(resp);
    //Actualizar en firebase
    //FirebaseAuth.currentUser --> obtengo el usuario actual que esta logiado, actaulizando el displayname
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: "The email you are trying to register is already in use",
    };
  }
};

export const loginEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    // errorMessage: error.message
    return { ok: false, errorMessage: "Wrong authentication/password" };
  }
};

//funcion de cerrar sesion
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut(); // esto cierra google, firebase etc
};
