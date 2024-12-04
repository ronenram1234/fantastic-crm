import React, { createContext,  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

import { ToastContainer } from "react-bootstrap";
import { User } from "./interfaces/User";

// import { useSetCurrentUser } from "./services/useSetCurrentUser";
import { getTokenLocalStorage, getUserDetail, removeTokenLocalStorage, tokenToDecoode } from "./services/userServices";
import { Jwt } from "./interfaces/Jwt";

interface GlobalPropsType {
  isUserLogedin: boolean;
  setIsUsserLogedin: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;

  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GlobalProps = createContext<GlobalPropsType>({
  isUserLogedin: false,
  setIsUsserLogedin: () => {},
  token: "",
  setToken: () => {},
  currentUser: null,
  setCurrentUser: () => {},

  isDarkMode: false,
  setIsDarkMode: () => {},
});

function App() {
  const localToken=getTokenLocalStorage() || ""
  console.log(localToken)
  const [token, setToken] = useState(localToken);
  const [isUserLogedin, setIsUsserLogedin] = useState(localToken===""? false : true);
  
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const globalContextValue = {
    isUserLogedin,
    setIsUsserLogedin,
    token,
    setToken,
    currentUser,
    setCurrentUser,
    isDarkMode,
    setIsDarkMode,
  };

  // check if user alreadt login before
  // useSetCurrentUser();
  
  if (localToken !== "") {
    // setIsUsserLogedin(true);
    const jwtUser: Jwt = tokenToDecoode(localToken);
    getUserDetail(jwtUser._id, localToken)
    .then((res) => {
        // setToken(localToken);
        setCurrentUser(res.data);
        // setIsUsserLogedin(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Transaction Error");
        removeTokenLocalStorage()
        setIsUsserLogedin(false)
      });}

  

  return (
    <GlobalProps.Provider value={globalContextValue}>
      <div className="App">
        <>
          <ToastContainer />

          <NavBar />

          <Router>
            <Routes>
              <Route path="/" element={<Main />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>

          <Footer />
        </>
      </div>
    </GlobalProps.Provider>
  );
}

export default App;
