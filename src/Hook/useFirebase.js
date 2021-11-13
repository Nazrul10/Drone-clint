import { getAuth, createUserWithEmailAndPassword, signOut,onAuthStateChanged,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializetion from "../Pages/Login/Firebase/Firebase.init";

//intialization call
initializetion()

const useFirebase = () =>{
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
  

    //sing with email & password
    const registerUser = (email, password, name, history) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
            //update name
            const newUswer = {email, displayName: name}
            setUser(newUswer)
            //
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // Save to database 

               saveData(email, name, 'POST')

                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });

                // history.push('/') or
                history.replace('/')
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=> setIsLoading(false));
    };

//login method
const logIn = (email, password) =>{
    setIsLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
  .finally(()=> setIsLoading(false));
}
  
//Sign out method
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
          }).catch((error) => {
            setUser({});
            setAuthError(error.message)
          })
          .finally(()=> setIsLoading(false));
    }

//This so importent to change out sign in sign out and observe
useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          //
        } else {
            setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
}, [])

// new user connection with server
const saveData = (email, displayName, method) =>{

  const user = {email, displayName}
      // fetch
      fetch('https://intense-hollows-21648.herokuapp.com/users',{
        method: method,
        headers:{'content-type':'application/json'},
        body: JSON.stringify(user)
      })
}
// Database call recive for an admin
 
  useEffect(()=>{
    fetch(`https://intense-hollows-21648.herokuapp.com/users/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
      setAdmin(data.admin)
    })
  }, [user?.email])

    return {
        user,
        logOut,
        admin,
        registerUser,
        logIn,
        isLoading,
        authError,
    }
}
export  default useFirebase;