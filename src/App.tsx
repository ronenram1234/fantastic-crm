import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import ModalLoginReg from './components/ModalLoginReg';

interface GlobalPropsType{
  isUserLogedin:boolean ;
  setIsUsserLogedin: React.Dispatch<React.SetStateAction<boolean>>;
  isUserAdmin:boolean ;
  setIsUsserAdmin:React.Dispatch<React.SetStateAction<boolean>> ;
   isUserBuisness:boolean ;
  setIsUsserBuisness:React.Dispatch<React.SetStateAction<boolean>> ;
   isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;

}
export const GlobalProps = createContext<GlobalPropsType>({

  isUserLogedin:false,
  setIsUsserLogedin:()=>{},
  isUserAdmin:false ,
  setIsUsserAdmin: ()=>{},
   isUserBuisness:false ,
  setIsUsserBuisness:()=>{} ,
   isDarkMode: false,
  setIsDarkMode:()=>{},



});

function App() {
  const [isUserLogedin,setIsUsserLogedin]=useState(false)
  const [isUserAdmin,setIsUsserAdmin]=useState(false)
  const [isUserBuisness,setIsUsserBuisness]=useState(false)
  const [isDarkMode,setIsDarkMode]=useState(false)
  const [modalShow, setModalShow] = useState(true);
  
  
  const globalContextValue = {
    isUserLogedin,
    setIsUsserLogedin,
    isUserAdmin,setIsUsserAdmin, isUserBuisness,setIsUsserBuisness, isDarkMode,setIsDarkMode
  };
  

  return (
    <GlobalProps.Provider value={globalContextValue}>
    <div className="App">
      <NavBar />

      <Router>
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<ModalLoginReg show={modalShow}
                onHide={() => setModalShow(false)} />} />
          {/* <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/update-customer/:id" element={<UpdateCustomer />} /> */}
           <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
      
    </div>
     </GlobalProps.Provider>
  );
}

export default App;

