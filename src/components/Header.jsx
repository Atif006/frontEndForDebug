import React from "react";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();
const Header = () => {
  const matches = useMediaQuery(() => theme.breakpoints.up("sm"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#00ffff",
      }}
    >
      <h3
        style={{
          fontFamily: "brush script mt",
          fontSize: matches ? "3rem" : "1.5rem",
        }}
      >
        Subhani hardware & plumber
      </h3>
      <h5 style={{ fontFamily: "georgia" }}> Sobhan Darbhanga </h5>
    </div>
  );
};

export default Header;
