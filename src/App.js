import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderPage from "./app/header/header";

const App = () => {
  return (
    <>
      <div>
    
        <HeaderPage />
        <BrowserRouter>
          <Routes>{/* <Route path="/login" element={<Login />} /> */}</Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
