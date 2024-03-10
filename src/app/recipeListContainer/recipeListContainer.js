import React from "react";
import "./style.css";
import recipe_icon from "../../assets/icons/recipes.png";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import loadState from "../../duck/reducers/commonReducer";

const RecipeListContainer = () => {
  const { recipes, getRecipesLoadState } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  return (
    <>
      <div className="recipe-list-conatiner">
        {getRecipesLoadState === loadState.STARTED && (
          <div>
            <Spin />
          </div>
        )}

        {recipes &&
          recipes.length > 0 &&
          recipes.map((item, index) => (
            <div className="recipe-container" key={index}>
              <img src={recipe_icon} alt="food" className="cover-image" />
              <span className="recipe-name">Biraynai</span>
              <span className="ingredients">hhhhhhhhh</span>
              <span className="see-more">See complete recipe</span>
            </div>
          ))}

        {recipes && recipes.length === 0 && (
          <div className="recipe-container">
            <img src={recipe_icon} alt="food" className="cover-image" />
            <span className="see-more">Search to get the recipes</span>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeListContainer;
