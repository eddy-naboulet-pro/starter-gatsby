import { IMultiplePageTemplateData } from "../data/dataStruct"
import {
  TextureLoader
} from "three"

export const merge = (pClasses: any[], pJoin: string = " "): string => {
  if (pClasses?.length > 0) {
    return pClasses
      .reduce((a, b) => a.concat(b), [])
      .filter((v) => v)
      .join(pJoin)
  }
}

export const getPageTemplateWebglSlice = (pages: IMultiplePageTemplateData[], loader: TextureLoader) => {
  return pages.reduce((obj, item) => {
    obj[item.node.uid] = {}
    obj[item.node.uid]['slices'] = item.node.data.body.reduce((slice, content) => {
      slice[content.id] = {}
      content.primary ?  slice[content.id]['texture'] = loader.load(content.primary.texture.url) : null
      content.items ? slice[content.id]['items'] = content.items.map((item) => loader.load(item.texture.url)) : null
      return slice
    }, {})
    return obj
  }, {})
}
