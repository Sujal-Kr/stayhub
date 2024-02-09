import React, { useState,useEffect,useContext } from "react"
import { database } from "../firebase";
export const UserContext=React.createContext();
import { AuthContext } from "./authContext";
export function UserProvider({children}){
        const [userData,setUserData] =useState()
        const {user}=useContext(AuthContext)
        const fetchUser=async()=>{
            const snapshot = await database.users.doc(user.uid).get()
            console.log(snapshot.data());
            setUserData(snapshot.data())
        }
        useEffect(()=>{
            fetchUser()
        },[user])
 

    const store={
        userData,
        setUserData
    }
    return(
        <UserContext.Provider value={store}>
            {children}
        </UserContext.Provider>
    )

}
