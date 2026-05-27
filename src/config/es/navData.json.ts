/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// utils
import { getAllPosts, countItems, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
// const posts = await getAllPosts("en");
// const allCategories = posts.map((post) => post.data.categories).flat();
// const countedCategories = countItems(allCategories);
// const processedCategories = sortByValue(countedCategories);

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "Inicio",
    link: "/",
  },

  // regular dropdown
  {
    text: "Servicios",
    dropdown: [
      {
        text: "Estructuras Metálicas",
        link: "/servicios/estructuras-metalicas",
      },
      {
        text: "Construcción Llave en Mano",
        link: "/servicios/construccion-llave-en-mano",
      },
      {
        text: "Área Industrial y Mantenimiento",
        link: "/servicios/area-industrial-y-mantenimiento",
      },
      {
        text: "Metalistería",
        link: "/servicios/metalisteria",
      },
      {
        text: "Ingeniería y Consultoría",
        link: "/servicios/ingenieria-y-consultoria",
      },
    ],
  },
  {
    text: "Casos de Éxito",
    link: "/casos-de-exito",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  // {
  //   // get the categories used in blog posts, to put into a navbar dropdown
  //   text: "Categories",
  //   dropdown: processedCategories.map(([category, count]) => {
  //     return {
  //       text: humanize(category),
  //       link: `/categories/${category}`,
  //     };
  //   }),
  // },
];

export default navConfig;
