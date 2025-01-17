import {
  IconBoxMultiple,
  IconPoint,
  IconGitMerge,
  IconCurrencyDollar,
  IconStar,
  IconPackage,
  IconChartDots,
  IconUserPlus,
  IconSettings,
  IconLockAccess,
} from "@tabler/icons-react";
import { uniqueId } from "lodash";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/appStore';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const SidebarItems = () => {
  const [isCollapse, toggleIsCollapse] = useState(false);
  const isSidebarHover = false;
  const location = useLocation();
  const pathname = location.pathname;
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? isCollapse && !isSidebarHover : '';

  const clients = useSelector((state: RootState) => state.clients.clients);
  const numberOfClients = clients.length;

  const Menuitems: MenuitemsType[] = [
    {
      navlabel: true,
      subheader: "Home",
    },
    {
      id: uniqueId(),
      title: "Register",
      icon: IconUserPlus,
      href: "",
      children: [
        {
          id: uniqueId(),
          title: "Client",
          icon: IconPoint,
          href: "/clients/register/",
        },
        {
          id: uniqueId(),
          title: "Employee",
          icon: IconPoint,
          href: "",
        },
      ],
    },
    {
      id: uniqueId(),
      title: "Maintenance",
      icon: IconSettings,
      href: "",
    },
  
    {
      navlabel: true,
      subheader: "Academe",
    },
    {
      id: uniqueId(),
      title: "Clients",
      icon: IconPackage,
      chip: numberOfClients.toString(),
      chipColor: "secondary",
      href: "/clients",
    },
    {
      id: uniqueId(),
      title: "Modules",
      icon: IconLockAccess,
      chip: "0",
      chipColor: "primary",
      href: "",
    },
    {
      id: uniqueId(),
      title: "Schedule",
      icon: IconGitMerge,
      href: "",
    },
    {
      id: uniqueId(),
      title: "Accounts",
      icon: IconCurrencyDollar,
      href: "",
    },
    {
      navlabel: true,
      subheader: "Reporting",
    },
    {
      id: uniqueId(),
      title: "Meeting Minutes",
      icon: IconBoxMultiple,
      chip: "0",
      href: "",
      chipColor: "secondary",
    },
    {
      id: uniqueId(),
      title: "Reports",
      icon: IconChartDots,
      href: "",
      chip: "0",
      chipColor: "primary",
    },
    {
      id: uniqueId(),
      title: "Saved",
      external: true,
      icon: IconStar,
      href: "",
    },
  ];

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
