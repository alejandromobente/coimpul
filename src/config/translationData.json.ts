/**
 * * Configuration of the i18n system data files and text translations
 */

import siteDataEs from "./es/siteData.json";
import siteDataEn from "./en/siteData.json";
import navDataEs from "./es/navData.json";
import navDataEn from "./en/navData.json";

export const dataTranslations = {
  es: {
    siteData: siteDataEs,
    navData: navDataEs,
  },
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
  },
} as const;

export const textTranslations = {
  es: {
    hero_text: "COIMPUL<br>Engineering & steel solutions",
    hero_description:
      "Ingenieros especialistas en construcciones industriales, estructuras metálicas y consultoría industrial. Cobertura nacional, innovación continua y soluciones a medida para cada cliente.",
    back_to_all_posts: "Volver a todos los artículos",
    updated: "Actualizado",
  },
  en: {
    hero_text: "COIMPUL<br>Engineering & steel solutions",
    hero_description:
      "Specialists in industrial construction, steel structures and industrial consultancy. Nationwide coverage, continuous innovation and tailor-made solutions for every client.",
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
  },
} as const;

export const routeTranslations = {
  es: {
    aboutKey: "about",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
    servicesKey: "servicios",
    casosDeExitoKey: "casos-de-exito",
    legalNoticeKey: "aviso-legal",
    cookiePolicyKey: "politica-cookies",
    accessibilityKey: "declaracion-accesibilidad",
  },
  en: {
    aboutKey: "about",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
    servicesKey: "services",
    casosDeExitoKey: "success-stories",
    legalNoticeKey: "legal-notice",
    cookiePolicyKey: "cookie-policy",
    accessibilityKey: "accessibility-statement",
  },
} as const;

export const localizedCollections = {
  blog: {
    es: "blog",
    en: "blog",
  },
  services: {
    es: "servicios",
    en: "services",
  },
} as const;
