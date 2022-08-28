import {createContext, useContext, useEffect, useState} from 'react'
import {auth, db} from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'
const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    function SignUp(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc (db, 'users', email), {savedMovies:[]})
    }

    function Login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function LogOut(){
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    })

    return <AuthContext.Provider value={{SignUp, Login, LogOut, user}}>{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext)
}