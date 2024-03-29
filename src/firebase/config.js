import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth';
//usar firestore y lite porque no requiero de todas las funcionalidades 
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey:import.meta.env.VITE_API_KEY,
    authDomain:import.meta.env.VITE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId:import.meta.env.VITE_APP_ID,
    databaseURL: import.meta.env.VITE_DATABASEURL

  };



  // Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//console.log(FirebaseApp.name);
export const FirebaseAuth= getAuth(FirebaseApp);
export const FirebaseDB= getFirestore(FirebaseApp)
