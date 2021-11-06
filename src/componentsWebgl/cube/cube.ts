
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  RectAreaLight
} from "three"

import RAF from "../../lib/raf"
import SCROLL from "../../lib/scroll"
import RESIZE from "../../lib/eventsResize"
import CANVAS from "../../lib/canvas"

interface Cube {
  cube : Mesh
}

class Cube {

  init() {
    this.bind()

    this.createCube()
    this.onResize()

    RAF.subscribe('WEBGLCUBE',this.update)
    RESIZE.subscribe('resizeCUBE', this.onResize)
  }

  bind() {
    this.update = this.update.bind(this)
    this.destroy = this.destroy.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  // ------------------------------------------------ SETUP

  createCube() {
    const geometry = new BoxGeometry( 250, 250, 250 )
    const material = new MeshNormalMaterial()
    this.cube = new Mesh( geometry, material )
    this.cube.name = 'cube'
    CANVAS.scene.add( this.cube )
  }

  // ------------------------------------------------ EVENTS
  onResize() {

  }

  // ------------------------------------------------ RAF
  update() {
    this.cube.rotation.y += 0.01
    this.cube.rotation.x += 0.01
    let scroll = SCROLL.ASScroll.currentPos
    this.cube.position.y = scroll
  }

  // ------------------------------------------------ DESTROY
  destroy() {
    RAF.unsubscribe('WEBGLCUBE')
    RESIZE.unsubscribe('WEBGLCUBE')
    CANVAS.scene.remove( this.cube )
  }
}

const _instance = new Cube()
export default _instance