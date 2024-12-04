import { useContext, useEffect } from "react";
import { Jwt } from "../interfaces/Jwt";
import { getTokenLocalStorage, getUserDetail, removeTokenLocalStorage, tokenToDecoode } from "./userServices";
import { GlobalProps } from "../App";



export function useSetCurrentUser(){
    const { setIsUsserLogedin,  setToken, token,setCurrentUser } =
    useContext(GlobalProps);

    useEffect(()=>{


      const localToken = getTokenLocalStorage();
      if (localToken !== "") {
        // setIsUsserLogedin(true);
        const jwtUser: Jwt = tokenToDecoode(localToken);
        getUserDetail(jwtUser._id, localToken)
        .then((res) => {
            setToken(localToken);
            setCurrentUser(res.data);
            setIsUsserLogedin(true);
          })
          .catch((err) => {
            console.log(err);
            alert("Transaction Error");
            removeTokenLocalStorage()
            setIsUsserLogedin(false)
          });
      }





    },[token])
    
}