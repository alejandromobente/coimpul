import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "COIMPUL S.L.",
  // Your website's title and description (meta fields)
  title: "COIMPUL S.L. | Ingeniería y estructuras metálicas",
  description:
    "Empresa especializada en estructuras metálicas, construcción llave en mano, metalistería e ingeniería industrial. Cobertura nacional.",

  // used on contact page and footer
  contact: {
    address1: "Poligono industrial la fundición, 23740 Andújar",
    address2: "Jaén",
    phone: "+34 691 549 334",
    email: "coimpul@coimpul.com",
  },

  // Your information for blog post purposes
  author: {
    name: "COIMPUL",
    email: "coimpul@coimpul.com",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/logo-url.png",
    alt: "COIMPUL S.L.",
  },
};

export default siteData;
