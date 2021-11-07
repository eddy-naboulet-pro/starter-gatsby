
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Texture
} from "three"

import raf from "../../lib/raf"
import scroll from "../../lib/scroll"
import resize from "../../lib/eventsResize"
import canvas from "../../lib/canvas"

interface Cube {
  cube : Mesh
  domElement: HTMLElement
  texture: Texture
  height: number
  width: number
  bounds: {
    top: number
    left: number
    width: number
    height: number
  }
}

class Cube {
  constructor(texture: Texture, domElement: HTMLElement) {
    this.texture = texture
    this.domElement = domElement
    this.init()
  }

  init() {
    this.bind()

    this.createBounds()
    this.createCube()
    this.onResize()

    raf.subscribe('WEBGLCUBE',this.update)
    resize.subscribe('resizeCUBE', this.onResize)
  }

  bind() {
    this.update = this.update.bind(this)
    this.destroy = this.destroy.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  // ------------------------------------------------ SETUP
  createBounds() {
    const bounds = this.domElement.getBoundingClientRect()

    this.height = canvas.container.offsetHeight
    this.width = canvas.container.offsetWidth

    this.bounds = {
      top: bounds.top + scroll.ASScroll.currentPos,
      left: bounds.left,
      width: bounds.width,
      height: bounds.height,
    }

  }

  createCube() {
    const geometry = new BoxGeometry( 1, 1, 1 )
    const material = new MeshBasicMaterial({map: this.texture})
    this.cube = new Mesh( geometry, material )
    this.cube.scale.set(this.bounds.width, this.bounds.height,1)
    canvas.scene.add( this.cube )
  }

  // ------------------------------------------------ EVENTS
  onResize() {
    this.createBounds()
    this.cube.scale.set(this.bounds.width, this.bounds.height,1)
  }

  // ------------------------------------------------ POSITIONS
  setPosition() {
    this.cube.position.x = this.bounds.left - this.width / 2 + this.bounds.width / 2
    this.cube.position.y = scroll.ASScroll.currentPos -this.bounds.top + this.height / 2 - this.bounds.height / 2
  }

  // ------------------------------------------------ RAF
  update() {
    this.setPosition()
  }

  // ------------------------------------------------ DESTROY
  destroy() {
    raf.unsubscribe('WEBGLCUBE')
    resize.unsubscribe('WEBGLCUBE')
    canvas.scene.remove( this.cube )
  }
}

export default Cube