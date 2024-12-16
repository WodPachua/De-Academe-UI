"use client";
import { Outlet } from 'react-router-dom'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const theme = useTheme();

  return (
    <MainWrapper className='mainwrapper'>
      <title>De-Academe</title>
      <Sidebar />
      <PageWrapper
        className="page-wrapper"
        sx={{
          ...(!isSidebarOpen && {
            [theme.breakpoints.up("lg")]: {
              ml: '87px',
            },
          }),
        }}
      >
        <Header />      
        <Container
          sx={{
            pt: '30px',
            maxWidth: "100%!important",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  )
}

export default App