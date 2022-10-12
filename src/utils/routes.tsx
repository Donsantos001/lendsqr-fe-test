import {
  FaUser,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaUserTimes,
  FaUserCheck,
  FaUserCog,
  FaChartBar,
  FaShoppingBag,
} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FiAperture } from "react-icons/fi";
import {
  RiBankLine,
  RiDatabase2Fill,
  RiFilePaper2Line,
  RiPercentFill,
} from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSlider } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineAudit } from "react-icons/ai";
import { GrTransaction, GrServices } from "react-icons/gr";

export const dashboardRoute = {
  title: "Dashboard",
  icon: <IoHomeOutline />,
  path: "/dashboard",
};

export const customerRoutes = [
  {
    title: "Users",
    icon: <FaUser />,
    path: "/users",
  },
  {
    title: "Guarantors",
    icon: <FaUsers />,
    path: "/pagenotfound",
  },
  {
    title: "Loans",
    icon: <GiMoneyStack />,
    path: "/pagenotfound",
  },
  {
    title: "Decision Models",
    icon: <FaRegHandshake />,
    path: "/pagenotfound",
  },
  {
    title: "Savings",
    icon: <FaPiggyBank />,
    path: "/pagenotfound",
  },
  {
    title: "Loan requests",
    icon: <FaHandHoldingUsd />,
    path: "/pagenotfound",
  },
  {
    title: "Whitelist",
    icon: <FaUserCheck />,
    path: "/pagenotfound",
  },
  {
    title: "Karma",
    icon: <FaUserTimes />,
    path: "/pagenotfound",
  },
];

export const businessesRoutes = [
  {
    title: "Organization",
    icon: <FaShoppingBag />,
    path: "/pagenotfound",
  },
  {
    title: "Loan Products",
    icon: <GiReceiveMoney />,
    path: "/pagenotfound",
  },
  {
    title: "Savings Products",
    icon: <RiBankLine />,
    path: "/pagenotfound",
  },
  {
    title: "Fees and Charges",
    icon: <RiDatabase2Fill />,
    path: "/pagenotfound",
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
    path: "/pagenotfound",
  },
  {
    title: "Services",
    icon: <GrServices />,
    path: "/pagenotfound",
  },
  {
    title: "Service Account",
    icon: <FaUserCog />,
    path: "/pagenotfound",
  },
  {
    title: "Settlements",
    icon: <RiFilePaper2Line />,
    path: "/pagenotfound",
  },
  {
    title: "Reports",
    icon: <FaChartBar />,
    path: "/pagenotfound",
  },
];

export const settingsRoutes = [
  {
    title: "Preferences",
    icon: <BiSlider />,
    path: "/pagenotfound",
  },
  {
    title: "Fees and Pricing",
    icon: <RiPercentFill />,
    path: "/pagenotfound",
  },
  {
    title: "Audit Logs",
    icon: <AiOutlineAudit />,
    path: "/pagenotfound",
  },

  {
    title: "System Messages",
    icon: <FiAperture />,
    path: "/pagenotfound",
  },
];
