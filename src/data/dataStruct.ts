// ----------------------------------- PAGE
export interface IPageData {
  page: {
    uid: string,
    data: ISeoData
  }
}

// ----------------------------------- SEO
export interface ISeoData {
  meta_description: string
  meta_title: string
}