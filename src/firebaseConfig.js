import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEjBUMZqiNn7YnenVhQ57ki1pXx8nShW8",
  authDomain: "final-8db73.firebaseapp.com",
  projectId: "final-8db73",
  storageBucket: "final-8db73.appspot.com",
  messagingSenderId: "167924561648",
  appId: "1:167924561648:web:d221ff5ff013055ebd7435",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
