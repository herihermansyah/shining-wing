import type {MainMenuType, ServiceAboutType} from "@/types";

export const mainMenu: MainMenuType[] = [
  {id: 1, title: "home", path: "/"},
  {id: 2, title: "shop", path: "/shop"},
  {id: 3, title: "contact", path: "/contact"},
];

export const serviceAbout: ServiceAboutType[] = [
  {id: 1, title: "about us", path: "/about"},
  {id: 3, title: "privacy policy", path: "/privacy"},
  {id: 4, title: "terms and conditions", path: "/termandcondtions"},
  {id: 5, title: "contact us", path: "/contact"},
  {id: 6, title: "how to return", path: "/return"},
];
