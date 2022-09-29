//proveedor de los servicios de autenticacion
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
//Auntenticarme con google
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const { displayName,email,photoURL,uid  }=result.user
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    console.log({ credentials });
    //     return{
    //     ok:true,//todo salio bien en la funcion
    //     displayName,email,photoURL,uid
    // }
  } catch (error) {
    //const errorCode = error.code;
    //const errorMessage = error.message;
   console.log(error)
}
};