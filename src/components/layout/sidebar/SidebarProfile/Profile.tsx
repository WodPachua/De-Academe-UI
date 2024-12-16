import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { IconPower } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
export const Profile = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const isCollapse = false;
  const isSidebarHover = false
  const hideMenu = lgUp ? isCollapse && !isSidebarHover : '';

  return (
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${'secondary.light'}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar alt="Avatar" src={"/images/logo.png"} sx={{height: 40, width: 40}} />

          <Box>
            <Typography variant="h6">Twon Coo</Typography>
            <Typography variant="caption">CEO</Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                color="primary"
                component={Link}
                to=''
                aria-label="logout"
                size="small"
              >
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
