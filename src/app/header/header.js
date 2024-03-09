import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Input } from "antd";
import "./header.css";
import recipe_icon from "../../assets/icons/recipes.png";

const HeaderPage = () => {
  return (
    <>
      <Header>
        <div className="title">
          <img src={recipe_icon} alt="icon" className="img-icon" />
          <span className="title-span">Recipe finder</span>
        </div>
        <div className="search-area">
          <div>
            <Input placeholder="search here..."></Input>
          </div>

          <SearchOutlined />
        </div>
      </Header>
    </>
  );
};

export default HeaderPage;
