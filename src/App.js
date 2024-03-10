import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderPage from "./app/header/header";
import RecipeListContainer from "./app/recipeListContainer/recipeListContainer";

const App = () => {
  return (
    <>
      <div>
        <HeaderPage />
        <RecipeListContainer />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
};

export default App;
