import { useContext, useEffect } from "react";
import { Jwt } from "../interfaces/Jwt";
import { getUserDetail, tokenToDecoode } from "./userServices";
import { GlobalProps } from "../App";



export function useSetCurrentUser(){
    const { setIsUsserLogedin,  token, setCurrentUser } =
    useContext(GlobalProps);

    useEffect(()=>{
        if (!token) {
            // alert("No token provided");
            return;
          }

        const jwtUser: Jwt = tokenToDecoode(token);

        getUserDetail(jwtUser._id, token)
          .then((res) => {
            setCurrentUser(res.data);
          })
          .catch((err) => {
            console.log(err);
            alert("Transaction Error");
          });

        setIsUsserLogedin(true);

    },[ setIsUsserLogedin,  token, setCurrentUser])
    
}