import { FunctionComponent, useContext, useState } from "react";
import { GlobalProps } from "../App";
import ModalLoginReg from "./ModalLoginReg";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {


  const { isDarkMode,isUserLogedin } = useContext(GlobalProps);

  

  return (
    <>
  
      {isUserLogedin && (
      <>
        <h1>main</h1>
        <h2>{isDarkMode ? "isDarkMode- true" : "isDarkMode - false"}</h2>
      </>)}
    </>
  );
};

export default Main;
