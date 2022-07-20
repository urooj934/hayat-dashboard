import { MdSpaceDashboard ,MdDeliveryDining} from "react-icons/md";
import {  CgProfile } from "react-icons/cg";
import { IoFastFood } from "react-icons/io5";
import {VscFeedback} from "react-icons/vsc";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/home",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    title: "objects Donations",
    path: "/donation",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <IoFastFood />,
  },
  {
    id: 3,
    title: "Requests",
    path: "/requests",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <IoFastFood />,
  },
  {
    id: 4,
    title: "Food Donation",
    path: "/donations",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <IoFastFood />,
  },
  {
    id: 5,
    title: "Requests",
    path: "/request",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <IoFastFood />,
  },
  {
    id: 6,
    title: "Users",
    path: "/profile",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <CgProfile />,
  },
  {
    id: 7,
    title: "Riders",
    path: "/riders",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <MdDeliveryDining />,
  },
  {
    id: 8,
    title: "Objects Dilevery",
    path: "/donateObjDelivery",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <MdDeliveryDining />,
  },
  {
    id: 9,
    title: "Feedback",
    path: "/feedback",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <VscFeedback />,
  },
];