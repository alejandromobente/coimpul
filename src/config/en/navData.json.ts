import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Services",
    dropdown: [
      {
        text: "Steel Structures",
        link: "/services/estructuras-metalicas",
      },
      {
        text: "Turnkey Construction",
        link: "/services/construccion-llave-en-mano",
      },
      {
        text: "Industrial & Maintenance",
        link: "/services/area-industrial-y-mantenimiento",
      },
      {
        text: "Metalwork",
        link: "/services/metalisteria",
      },
      {
        text: "Engineering & Consulting",
        link: "/services/ingenieria-y-consultoria",
      },
    ],
  },
  {
    text: "Success Stories",
    link: "/success-stories",
  },
  {
    text: "Blog",
    link: "/blog",
  },
];

export default navConfig;
