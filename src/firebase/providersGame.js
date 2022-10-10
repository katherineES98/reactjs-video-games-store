import { FirebaseDB } from "./config";
// import { collection, deleteDoc, doc, setDoc,addDoc } from "firebase/firestore/lite";
import { collection, addDoc, doc, setDoc} from "firebase/firestore";


export const saveGames = async (params) => {
 const docRef =doc(collection(FirebaseDB, "games"));
  return await setDoc(docRef, params);
};


export const getSaveGames = () => {};
