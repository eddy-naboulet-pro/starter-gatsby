import React from "react"
import { Helmet } from "react-helmet"
import { breadcrumbList, BreadcrumbListItem } from "../../constants/json-ld"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  noIndex?: boolean
  breadcrumbListItems?: BreadcrumbListItem[]
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  noIndex = false,
  breadcrumbListItems = [],
  children,
}) => {
  const { siteTitle, siteTitleDefault, siteUrl, siteDescription, siteImage, twitter } = useSiteMetadata()

  const seo = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || siteImage}`,
  }

  return (
    //@ts-ignore: Unreachable code error
    <Helmet>
      <html lang="en-US" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:see_also" content="https://github.com/LekoArts" />
      <meta property="og:see_also" content="https://www.behance.net/lekoarts" />
      <meta property="og:see_also" content="https://dribbble.com/LekoArts" />
      <meta property="og:see_also" content="https://youtube.de/LekoArtsDE" />
      <meta property="og:see_also" content="https://twitter.com/lekoarts_de" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="creator" content="LekoArts" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <title>{seo.title}</title>
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {breadcrumbListItems.length >= 1 && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbList(breadcrumbListItems))}</script>
      )}
      {children}
    </Helmet>
  )
}