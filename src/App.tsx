import React, { createContext,  useEffect,  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import ModalLoginReg from "./components/ModalLoginReg";
import { ToastContainer } from "react-bootstrap";
import { User } from "./interfaces/User";

interface GlobalPropsType {
  isUserLogedin: boolean;
  setIsUsserLogedin: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken:React.Dispatch<React.SetStateAction<string>> ;
  currentUser:User|null;
  setCurrentUser:React.Dispatch<React.SetStateAction<User | null>>;
  
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GlobalProps = createContext<GlobalPropsType>({
  isUserLogedin: false,
  setIsUsserLogedin: () => {},
  token:"",
  setToken:()=>{},
  currentUser:null,
  setCurrentUser:()=>{},
  
  isDarkMode: false,
  setIsDarkMode: () => {},
});

function App() {
  const [isUserLogedin, setIsUsserLogedin] = useState(false);
  const [token,setToken]=useState("")
  const [currentUser,setCurrentUser]= useState<User|null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // useEffect(()=>{
  //   console.log(currentUser)
  // },[currentUser])
  // useEffect(()=>{
  //   console.log(token)
  // },[token])
  

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
