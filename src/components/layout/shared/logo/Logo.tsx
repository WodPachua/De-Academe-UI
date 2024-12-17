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
    <LinkStyled to="/">
        <img
          // src="/images/logo.png"
          src="/images/academe1.svg"
          alt="logo"
          height={70}
          width={174}
        />
    </LinkStyled>
  );
};

export default Logo;
