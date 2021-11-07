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

export const createPagesTemplateObjectArray = (items: IMultiplePageTemplateData[], loader : TextureLoader) => {
  const pagesTemplate = []
  items.forEach(({node}, index : number) => {
    pagesTemplate[index] = {
      uid: node.uid,
      slices: node.data.body.map((item) => {
        return {
          id: item.id,
          slice_type: item.slice_type,
          webgl : null,
          texture: item.primary && item.primary.texture ? loader.load(item.primary.texture.url) : undefined,
          items : item.items ? item.items.map((item) => {
            return {
              texture : loader.load(item.texture.url)
            }
          }) : undefined
        }
      })
    }
  })
  return pagesTemplate
}
