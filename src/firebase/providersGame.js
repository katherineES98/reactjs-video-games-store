import { FirebaseAuth, FirebaseDB } from "./config";
// import { collection, deleteDoc, doc, setDoc,addDoc } from "firebase/firestore/lite";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const saveGames = async (params) => {
  const docRef = doc(collection(FirebaseDB, "games"));
  return await setDoc(docRef, params);
};

export const getSaveGames = async () => {
  //const queryGames = await getDocs(collection(FirebaseDB, "games"));
  //filtrar
  try {
    const q = query(
      collection(FirebaseDB, "games"),
      where("userId", "==", FirebaseAuth.currentUser.uid)
    );

    const queryGames = await getDocs(q);
    const data = [];
 
    queryGames.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      data.push({ ...doc.data(), id: doc.id });
    });
  console.log("esta es la data ", data )
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
