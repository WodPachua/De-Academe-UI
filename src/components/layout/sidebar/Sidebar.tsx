import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SidebarItems from "./SidebarItems";
import Logo from "../shared/logo/Logo";
import Scrollbar from "../shared/Scrollbar";
import { Profile } from "./SidebarProfile/Profile";
import { useState } from "react";

const Sidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const theme = useTheme();
  const [isCollapse, toggleIsCollapse] = useState(false);
  const [isSidebarHover, toggleIsSideBarHover] = useState(false);
  const [isMobileSidebar, toggleIsMobileSidebar] = useState(false);
  const toggleWidth =
    isCollapse && !isSidebarHover
      ? '87px'
      : '270px';

  const onHoverEnter = () => {
    if (isCollapse) {
      toggleIsSideBarHover(true);
    }
  };

  const onHoverLeave = () => {
    toggleIsSideBarHover(false)
  };

  return (
    <>
      {!lgUp ? (
        <Box
          sx={{
            zIndex: 100,
            width: toggleWidth,
            flexShrink: 0,
            ...(isCollapse && {
              position: "absolute",
            }),
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar for desktop */}
          {/* ------------------------------------------- */}
          <Drawer
            anchor="left"
            open
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
            variant="permanent"
            PaperProps={{
              sx: {
                transition: theme.transitions.create("width", {
                  duration: theme.transitions.duration.shortest,
                }),
                width: toggleWidth,
                boxSizing: "border-box",
              },
            }}
          >
            {/* ------------------------------------------- */}
            {/* Sidebar Box */}
            {/* ------------------------------------------- */}
            <Box
              sx={{
                height: "100%",
              }}
            >
              {/* ------------------------------------------- */}
              {/* Logo */}
              {/* ------------------------------------------- */}
              <Box px={3}>
                <Logo />
              </Box>
              <Scrollbar sx={{ height: "calc(100% - 190px)" }}>
                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarItems />
              </Scrollbar>
              <Profile />
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={isMobileSidebar}
          onClose={() => toggleIsMobileSidebar(!isMobileSidebar)}
          variant="temporary"
          PaperProps={{
            sx: {
              width: '270px',
              border: "0 !important",
              boxShadow: (theme) => theme.shadows[8],
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          <Box px={2}>
            <Logo />
          </Box>
          {/* ------------------------------------------- */}
          {/* Sidebar For Mobile */}
          {/* ------------------------------------------- */}
          <SidebarItems />
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
