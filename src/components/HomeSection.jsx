import styled from "@emotion/styled";
import { AppBar, Box, IconButton } from "@mui/material";
import { Divider, message } from "antd";
import React, { useState } from "react";

import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import "../style/layout.css";
import NavBar from "./NavBar";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme();
const MainLayout = styled(Box)`
  padding: 5px;
  height: 99vh;

  width: 98vw;
  position: fixed;
`;
const LayOutBox = styled(Box)``;

const SideBarBox = styled(Box)`
  width: 25%;

  min-height: 90vh;
  //   color: #21618c;
  margin-right: 20px;
  box-shadow: 0 0 2px gray;
`;

const MenuBox = styled(Box)`
  height: 60vh;
  margin-top: 50px;
`;
const ContentBox = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
`;

const BodyBox = styled(Box)`
  width: 75%;
  height: 90vh;
  margin-bottom: 20px;
  box-shadow: 0 0 2px gray;
  background: white;
  overfloy-y: scroll;
`;

const MenuItem = styled(Box)`
  margin-top: 30px;
  display: flex;
`;
const LogOutSection = styled(Box)`
  padding-top: 10px;
`;
const NavBarSection = styled(Box)`
  width: 25%;

  justify-content: center;
`;

const HomeSection = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const matches = useMediaQuery(() => theme.breakpoints.up("sm"));
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
    <>
      <MainLayout className="main">
        <LayOutBox>
          <AppBar
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
              height: "15%",
            }}
          >
            <NavBarSection
              sx={{
                padding: theme.spacing(2),
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
                [theme.breakpoints.down("sm")]: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <div>
                <IconButton onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <CloseIcon style={{ fontSize: "4rem", color: "white" }} />
                  ) : (
                    <ClearAllIcon
                      style={{ fontSize: "4rem", color: "white" }}
                    />
                  )}
                </IconButton>
              </div>
            </NavBarSection>
            <Box
              sx={{
                width: "75%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  padding: theme.spacing(2),
                  fontFamily: "brush script mt",
                  fontSize: matches ? "300%" : "1.5rem",
                  marginLeft: matches ? "26%" : "",
                }}
              >
                Shubhani Hardware <span style={{ color: "red" }}>&</span>{" "}
                Plumber
              </p>
            </Box>
          </AppBar>

          <Divider />
          <ContentBox className="content" style={{ paddingTop: "" }}>
            <SideBarBox
              sx={{
                height: "100%",
                padding: theme.spacing(2),

                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            >
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
              </MenuBox>
              <LogOutSection>
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
              </LogOutSection>
            </SideBarBox>
            {toggle && <NavBar />}
            <BodyBox
              // className={classes.constentBar}
              sx={{
                padding: theme.spacing(2),

                marginTop: "3rem",
                [theme.breakpoints.down("sm")]: {
                  flex: "1",
                  marginTop: "5rem",
                  marginLeft: "-100%",
                },
              }}
              style={{
                marginLeft: toggle ? "-100%" : "0",
                overflowY: "scroll",
                height: "100%",
                paddingBottom: "5rem",
              }}
            >
              {children}
            </BodyBox>
          </ContentBox>
        </LayOutBox>
      </MainLayout>
    </>
  );
};

export default HomeSection;
