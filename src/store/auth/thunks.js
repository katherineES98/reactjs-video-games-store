import { checkingCredentials } from "./"

export const checkingAuthentication=(email,password)=>{
    return async(dispatch)=>{
      //Accion 
       dispatch(checkingCredentials())
        }
}


export const startGoogleSignIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        //const result= await singInWithGoogle();
       //if(!result.ok) dispatch(logout(result.errorMessage))
   //dispatch( login( result ) );

}
   
}