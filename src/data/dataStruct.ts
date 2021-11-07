// ----------------------------------- BASE PAGE TEMPLATE
export interface IBasePageTemplateData {
  uid: string
  data: {
    meta_description: string
    meta_title: string
    body?: (ICube | ICubes)[]
  }
}

// ----------------------------------- PAGE TEMPLATE
export interface ISinglePageTemplateData {
  page: IBasePageTemplateData
}

// ----------------------------------- PAGES TEMPLATE
export interface IMultiplePageTemplateData {
  node: IBasePageTemplateData
}

// ----------------------------------- SLICES
export interface ICube {
  id: string
  slice_type: string
  primary?: ITexture
  items?: ITexture[]
}

export interface ICubes {
  id: string
  slice_type: string
  primary?: ITexture
  items?: ITexture[]
}

// ----------------------------------- PARTIALS
export interface ITexture {
  texture: {
    alt: string
    url: string
  }
}