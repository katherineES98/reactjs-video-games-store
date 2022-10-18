import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  //validacion si esta autenticado o no para mostrar el spinner
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // pediente de la autenticacion
  useEffect(() => {
    //estado de la autenticacion cambie

    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  return status; //autenticado o no
};
