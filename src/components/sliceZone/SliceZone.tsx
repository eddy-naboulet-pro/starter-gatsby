import React, {Fragment} from 'react'
import Cube from '../cube/Cube'
import {ICube, ICubes} from '../../data/dataStruct'
interface IProps {
  uid: string
  data: (ICube | ICubes)[]
}

const SliceZone = ( data: IProps ) => {
  const slice = data.data.map( ( slice ) => {
    
    switch (slice.slice_type) {
      case 'cube':
        return <Cube primary={slice.primary} id={slice.id} key={slice.id} uid={data.uid}/>
      default:
        return null
    }
  })


  return <Fragment>{slice}</Fragment>
}

export default SliceZone