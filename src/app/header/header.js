import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Input, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import "./header.css";
import recipe_icon from "../../assets/icons/recipes.png";
// import fetchRecipe from "../../api/recipeApi";
import { getAllRECIPES } from "../../duck/actions/action";

const HeaderPage = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [timeoutID, updateTimeoutID] = useState();

  const handleSearch = (event) => {
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      //   fetchRecipe(event.target.value);
    }, 600);
    setSearchText(event.target.value);
    updateTimeoutID(timeout);
  };

  const onSearch = () => {
    dispatch(getAllRECIPES(searchText));
  };

  return (
    <>
      <Header>
        <div className="title">
          <img src={recipe_icon} alt="icon" className="img-icon" />
          <span className="title-span">Recipe finder</span>
        </div>
        <Tooltip title="click on search icon to search" color="magenta">
          <div className="search-area">
            <div>
              <Input
                placeholder="search Recipe"
                onChange={handleSearch}
              ></Input>
            </div>
            <SearchOutlined onClick={onSearch} />
          </div>
        </Tooltip>
      </Header>
    </>
  );
};

export default HeaderPage;
