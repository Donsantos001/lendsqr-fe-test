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
    path: "",
  },
  {
    title: "Loans",
    icon: <GiMoneyStack />,
    path: "",
  },
  {
    title: "Decision Models",
    icon: <FaRegHandshake />,
    path: "",
  },
  {
    title: "Savings",
    icon: <FaPiggyBank />,
    path: "",
  },
  {
    title: "Loan requests",
    icon: <FaHandHoldingUsd />,
    path: "",
  },
  {
    title: "Whitelist",
    icon: <FaUserCheck />,
    path: "",
  },
  {
    title: "Karma",
    icon: <FaUserTimes />,
    path: "",
  },
];

export const businessesRoutes = [
  {
    title: "Organization",
    icon: <FaShoppingBag />,
    path: "",
  },
  {
    title: "Loan Products",
    icon: <GiReceiveMoney />,
    path: "",
  },
  {
    title: "Savings Products",
    icon: <RiBankLine />,
    path: "",
  },
  {
    title: "Fees and Charges",
    icon: <RiDatabase2Fill />,
    path: "",
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
    path: "",
  },
  {
    title: "Services",
    icon: <GrServices />,
    path: "",
  },
  {
    title: "Service Account",
    icon: <FaUserCog />,
    path: "",
  },
  {
    title: "Settlements",
    icon: <RiFilePaper2Line />,
    path: "",
  },
  {
    title: "Reports",
    icon: <FaChartBar />,
    path: "",
  },
];

export const settingsRoutes = [
  {
    title: "Preferences",
    icon: <BiSlider />,
    path: "",
  },
  {
    title: "Fees and Pricing",
    icon: <RiPercentFill />,
    path: "",
  },
  {
    title: "Audit Logs",
    icon: <AiOutlineAudit />,
    path: "",
  },

  {
    title: "System Messages",
    icon: <FiAperture />,
    path: "",
  },
];
