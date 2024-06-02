import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Layout from "./components/Layout";
import JoinClub from "./pages/joinclub";
import Base from "./components/base";
import CreateClub from "./pages/createclub";

import LoggedOut from "./components/LoggedOut";
import { useAuth, AuthProvider } from "./components/Auth";
import DotLoader from "react-spinners/HashLoader";
import CreateProposal from "./pages/createproposal";
import Club from "./pages/club";
import Proposal from "./pages/proposal";

import "./components/Auth.css"
const App = () => {
  const [loading , setLoading] = useState()  

  const { isAuthenticated, identity } = useAuth(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div >  
   
       {loading ? (
        <div className="load">
        <DotLoader  color={"#36d7b7"} loading={loading}  size={71} aria-label="Loading Spinner"
        data-testid="loader" />
        </div>
      ) : isAuthenticated ? (
          

      
        <Routes>
        <Route element={<Layout />}>
        <Route index element={<Base />} />
         
          <Route path="/joinclub" element={<JoinClub />} /> {/* Assuming JoinClub is the correct component */}
          <Route path="/createclub" element={<CreateClub />} />
          <Route path="/club" element={<Club />} />
          <Route path="/createproposal" element={<CreateProposal />} />
          <Route path="/Proposal" element={<Proposal />} />
          

          </Route>  
        </Routes>
      )
    : <LoggedOut /> }
    </div>
  );
};

export default () => (
  <AuthProvider>
   
      <App />
 
  </AuthProvider>
)
