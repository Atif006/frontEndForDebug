import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { message } from "antd";
const MainBox = styled(Box)`
  width: 50%;
  height: full;
  margin-right: 2rem;
  margin-top: 3rem;
  box-shadow: 0 0 2px gray;
  background: white;
  z-index: 999;
`;
const MenuBox = styled(Box)`
  height: 100%;
  margin-top: 50px;
`;
const MenuItem = styled(Box)`
  margin-top: 30px;
  display: flex;
`;

const NavBar = () => {
  const location = useLocation();
  const logout = () => {
    localStorage.clear();
    message.success("LogOut Successfully...");
  };
  const MyMenu = [
    { name: "Home", path: "/", icon: "fa-solid fa-house" },
    {
      name: " Add Items",
      path: `/additems`,
      icon: "fa-solid fa-plus",
    },
    {
      name: "View Store",
      path: `/viewdata`,
      icon: "fa-solid fa-list",
    },

    {
      name: " Sell Items",
      path: `/smellites`,
      icon: "fa-solid fa-cart-plus",
    },
    {
      name: " Old Orders",
      path: `/allorders`,
      icon: "fa-solid fa-clipboard-list",
    },
  ];
  return (
    <MainBox>
      <MenuBox className="menu">
        {MyMenu.map((menu) => {
          const isActive = location.pathname === menu.path;

          return (
            <>
              <MenuItem className={isActive && "active"}>
                <i
                  className={menu.icon}
                  style={{
                    fontSize: "1.8rem",
                    margin: "0 15px",
                    color: "black",
                  }}
                ></i>

                <Link
                  to={menu.path}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    color: "black",
                  }}
                >
                  {menu.name}
                </Link>
              </MenuItem>
            </>
          );
        })}
        <MenuItem onClick={logout}>
          <i
            className="fa-solid fa-right-from-bracket"
            style={{
              fontSize: "1.8rem",
              margin: "0 15px",
              color: "black",
            }}
          ></i>

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
              color: "red",
            }}
          >
            LogOut
          </Link>
        </MenuItem>
      </MenuBox>
    </MainBox>
  );
};

export default NavBar;
