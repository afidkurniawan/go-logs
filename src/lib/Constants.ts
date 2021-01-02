export const menuSidebar = [
  {
    title: "Dashboard",
    icon: require("../assets/icons/dashboard.svg"),
    hasChild: false,
    active: false
  },
  {
    title: "DO Online",
    icon: require("../assets/icons/do.svg"),
    hasChild: true,
    active: false,
    child: false
  },
  {
    title: "DO Request",
    icon: require("../assets/icons/requestdo.svg"),
    hasChild: false,
    active: true,
    child: true
  },
  {
    title: "My Transaction",
    icon: require("../assets/icons/mytransaction.svg"),
    hasChild: false,
    active: false,
    child: true
  },
  {
    title: "System",
    icon: require("../assets/icons/system.svg"),
    hasChild: false,
    active: false,
    child: false
  },
  {
    title: "Logout",
    icon: require("../assets/icons/logout.svg"),
    hasChild: false,
    active: false,
    child: false
  }
];

export const topWizard = [
  {
    title: "Request Form",
    link: require("../assets/icons/iwizard1.svg"),
    active: true,
    next: true,
    prev: false
  },
  {
    title: "Confirmation",
    link: require("../assets/icons/iwizard2.svg"),
    active: false,
    next: true,
    prev: true
  },
  {
    title: "Proforma Invoice",
    link: require("../assets/icons/iwizard3.svg"),
    active: false,
    next: true,
    prev: true
  },
  {
    title: "Payment Confirmation",
    link: require("../assets/icons/iwizard4.svg"),
    active: false,
    next: true,
    prev: true
  },
  {
    title: "DO Release",
    link: require("../assets/icons/iwizard5.svg"),
    active: false,
    next: false,
    prev: true
  }
];
