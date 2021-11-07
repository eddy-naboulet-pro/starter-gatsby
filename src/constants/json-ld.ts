import { site } from "./meta"

export const identity = {
  "@id": `${site.url}/#identity`,
  "@type": `Organization`,
  alternateName: `Eddy Naboulet`,
  description: site.description,
  email: `eddy.naboulet.pro@gmail.com`,
  founder: `Eddy Naboulet`,
  foundingDate: `2020-05-08`,
  image: {
    "@type": `ImageObject`,
    height: `1024`,
    url: `${site.url}/social/logo-1024w.png`,
    width: `1024`,
  },
  logo: {
    "@type": `ImageObject`,
    height: `60`,
    url: `${site.url}/social/logo-60w.png`,
    width: `60`,
  },
  name: site.titleDefault,
  sameAs: [
    `https://twitter.com/`,
    `https://github.com/`,
  ],
  url: site.url,
}

export const creator = {
  "@id": `${site.url}/#creator`,
  "@type": `Organization`,
  alternateName: `Eddy Naboulet`,
  description: site.description,
  email: `eddy.naboulet.pro@gmail.com`,
  founder: `Eddy Naboulet`,
  foundingDate: `2020-05-08`,
  image: {
    "@type": `ImageObject`,
    height: `1024`,
    url: `${site.url}/social/logo-1024w.png`,
    width: `1024`,
  },
  logo: {
    "@type": `ImageObject`,
    height: `60`,
    url: `${site.url}/social/logo-60w.png`,
    width: `60`,
  },
  name: site.titleDefault,
  url: site.url,
}

export type BreadcrumbListItem = {
  url: string
  name: string
}

export const breadcrumbList = (items: BreadcrumbListItem[]) => {
  const homeLevel = {
    "@type": `ListItem`,
    item: {
      "@id": site.url,
      name: `Homepage`,
    },
    position: 1,
  }
  const nestedLevels = items.map((item, index) => ({
    "@type": `ListItem`,
    item: {
      "@id": `${site.url}${item.url}`,
      name: item.name,
    },
    position: index + 2,
  }))
  return {
    "@context": `https://schema.org`,
    "@type": `BreadcrumbList`,
    description: `Breadcrumbs list`,
    itemListElement: [homeLevel, ...nestedLevels],
    name: `Breadcrumbs`,
  }
}

export const homepage = {
  "@context": `https://schema.org`,
  "@graph": [
    identity,
    creator,
    {
      "@type": `WebPage`,
      author: { "@id": `${site.url}/#identity` },
      copyrightHolder: { "@id": `${site.url}/#identity` },
      copyrightYear: `2017`,
      creator: { "@id": `${site.url}/#creator` },
      datePublished: `2017-12-08T23:33:12-05:00`,
      description: site.description,
      headline: site.titleDefault,
      image: {
        "@type": `ImageObject`,
        url: `${site.url}${site.image}`,
      },
      inLanguage: `en-US`,
      mainEntityOfPage: site.url,
      name: site.titleDefault,
      publisher: { "@id": `${site.url}/#creator` },
      url: site.url,
    },
    breadcrumbList([]),
  ],
}