import Menuitems from './MenuItems';
// import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const SidebarItems = () => {
  const [isCollapse, toggleIsCollapse] = useState(false);
  const isSidebarHover = false;
  // const  pathname  = usePathname();
  const location = useLocation();
  const pathname = location.pathname;
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? isCollapse && !isSidebarHover : '';

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => toggleIsCollapse(!isCollapse)}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu} onClick={() => toggleIsCollapse(!isCollapse)} />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
