import { FunctionComponent, useContext } from "react";
import { GlobalProps } from "../App";
import { useNavigate } from "react-router-dom";
import ModalLoginReg from "./ModalLoginReg";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  const { isDarkMode, isUserLogedin } = useContext(GlobalProps);
  // const navigate = useNavigate();

  return (
    <>
      {isUserLogedin ? (
        <>
          <h1>main</h1>
          <h2>{isDarkMode ? "isDarkMode- true" : "isDarkMode - false"}</h2>
        </>
      ) : (
        <ModalLoginReg />
      )}
    </>
  );

  // <h2>{isDarkMode ? "isDarkMode- true" : "isDarkMode - false"}</h2>
};

export default Main;
