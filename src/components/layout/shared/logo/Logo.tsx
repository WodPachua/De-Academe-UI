'use client'
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const Logo = () => {
  const [isCollapse] = useState(false);
  const LinkStyled = styled(Link)(() => ({
    height: "70px",
    width: isCollapse ? "40px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  return (
    <LinkStyled to="/dashboard">
        <img
          src="/images/logo.png"
          alt="logo"
          height={70}
          width={100}
        />
    </LinkStyled>
  );
};

export default Logo;
