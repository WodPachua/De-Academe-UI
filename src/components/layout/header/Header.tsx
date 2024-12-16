import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { IconMenu2 } from "@tabler/icons-react";
import Notifications from "./Notification";
import Profile from "./Profile";
import Search from "./Search";
import { useState } from "react";

const Header = () => {
  const [sidebar, toggleSidebar] = useState(true);
  const [mobileSidebar, toggleMobileSidebar] = useState(false);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default" sx={{ borderBottom: '1px solid grey'}}>
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={
            lgUp
              ? () => toggleSidebar(!sidebar)
              : () => toggleMobileSidebar(!mobileSidebar)
          }
        >
          <IconMenu2 size="20" />
        </IconButton>

        <Search />

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Notifications />
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
