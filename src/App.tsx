import React, { createContext,  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import ModalLoginReg from "./components/ModalLoginReg";
import { ToastContainer } from "react-bootstrap";

interface GlobalPropsType {
  isUserLogedin: boolean;
  setIsUsserLogedin: React.Dispatch<React.SetStateAction<boolean>>;
  isUserAdmin: boolean;
  setIsUsserAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  isUserBuisness: boolean;
  setIsUsserBuisness: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GlobalProps = createContext<GlobalPropsType>({
  isUserLogedin: false,
  setIsUsserLogedin: () => {},
  isUserAdmin: false,
  setIsUsserAdmin: () => {},
  isUserBuisness: false,
  setIsUsserBuisness: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
});

function App() {
  const [isUserLogedin, setIsUsserLogedin] = useState(false);
  const [isUserAdmin, setIsUsserAdmin] = useState(false);
  const [isUserBuisness, setIsUsserBuisness] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const globalContextValue = {
    isUserLogedin,
    setIsUsserLogedin,
    isUserAdmin,
    setIsUsserAdmin,
    isUserBuisness,
    setIsUsserBuisness,
    isDarkMode,
    setIsDarkMode,
  };

  // useEffect(()=>{
  //   setModalShow(!modalShow)
  // },[isUserLogedin,modalShow])

  return (
    <GlobalProps.Provider value={globalContextValue}>
      <div className="App">
      <ToastContainer  />
        
        <NavBar />

        <Router>
          <Routes>
            {isUserLogedin ? (
              <Route path="/" element={<Main />} />
            ) : (<>
              <Route
                path="/"
                element={
                  <ModalLoginReg
                    // show={true}
                    // onHide={() => setModalShow(false)}
                  />
                }
              />
           </> )}

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        {/* {isUserLogedin && <Footer />} */}
        <Footer />
      </div>
    </GlobalProps.Provider>
  );
}

export default App;
