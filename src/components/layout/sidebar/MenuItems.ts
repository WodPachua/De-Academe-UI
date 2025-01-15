import { uniqueId } from "lodash";

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
    chip: "10",
    chipColor: "secondary",
    href: "/clients",
  },
  {
    id: uniqueId(),
    title: "Modules",
    icon: IconLockAccess,
    chip: "5",
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
    chip: "3",
    href: "",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconChartDots,
    href: "",
    chip: "9",
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

export default Menuitems;
