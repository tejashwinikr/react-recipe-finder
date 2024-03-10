import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Spin, Table } from "antd";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import "./style.css";
import loadState from "../../duck/reducers/commonReducer";
import recipe_icon from "../../assets/icons/recipes.png";

const RecipeListContainer = () => {
  const { recipes, getRecipesLoadState } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  const [open, setOpen] = useState(false);
  const [ingredientData, setIngredientData] = useState(false);

  const handleClickOpen = (item) => {
    console.log("====", item);
    setIngredientData(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ingedientsColumns = [
    {
      title: "Ingredients",
      key: "ingredients",
      dataIndex: "text",
    },
    {
      title: "Weights",
      key: "Weights",
      dataIndex: "weight",
    },
  ];

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ingredients"}</DialogTitle>
        <DialogContent>
          <Table columns={ingedientsColumns} dataSource={ingredientData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>

      <div className="recipe-list-conatiner">
        {getRecipesLoadState === loadState.STARTED && (
          <div>
            <Spin />
          </div>
        )}

        {recipes && recipes.length === 0 && (
          <div className="recipe-container">
            <img src={recipe_icon} alt="food" className="cover-image" />
            <span className="see-more">Search to get the recipes</span>
          </div>
        )}

        {recipes &&
          recipes.length > 0 &&
          recipes.map((item, index) => (
            // console.log("===")
            <div className="recipe-container" key={index}>
              <img src={item.recipe.image} alt="food" className="cover-image" />
              <span className="recipe-name">{item.recipe.label}</span>
              <span
                className="ingredients"
                onClick={() => handleClickOpen(item.recipe.ingredients)}
              >
                Ingredients
              </span>
              <span
                className="see-more"
                onClick={() => window.open(item.recipe.url)}
              >
                See complete recipe
              </span>
            </div>
          ))}
      </div>
    </>
  );
};

export default RecipeListContainer;
