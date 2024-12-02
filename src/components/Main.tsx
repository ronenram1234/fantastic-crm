import { FunctionComponent, useContext } from "react";
import { GlobalProps } from "../App";


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
