import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.confiq";


const initializetion = () =>{
    initializeApp(firebaseConfig)
}

export default initializetion;