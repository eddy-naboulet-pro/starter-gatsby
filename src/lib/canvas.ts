
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial
} from "three"

import RAF from "./raf"
import RESIZE from "./eventsResize"

interface Canvas {
  container : HTMLElement
  width: number
  height: number
  camera: PerspectiveCamera
  scene: Scene
  renderer: WebGLRenderer
  cube : Mesh

}

class Canvas {

  init(canvas: HTMLElement) {
    this.bind()

    this.container = canvas
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight

    this.createCamera()
    this.createScene()
    this.createRenderer()
    this.onResize()

    RAF.subscribeCanvas(this.update)
    RESIZE.subscribe('resizeCANVAS', this.onResize)
  }

  bind() {
    this.update = this.update.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  // ------------------------------------------------ SETUP
  createCamera() {
    const fov = 2*Math.atan( (this.height / 2) / 600 ) * 180 / Math.PI
    this.camera = new PerspectiveCamera( fov, this.width / this.height, 10, 1000 )
    this.camera.position.z = 600
    this.camera.fov = fov
  }

  createScene() {
    this.scene = new Scene()
  }

  createRenderer() {
    this.renderer = new WebGLRenderer({ 
      antialias: true,
      alpha: true,
    })
    this.container.appendChild( this.renderer.domElement )
  }

  // ------------------------------------------------ EVENTS
  onResize() {
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight

    this.renderer.setSize( this.width, this.height )
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.camera.fov = 2*Math.atan( (this.height / 2) / 600 ) * 180 / Math.PI
  }

  // ------------------------------------------------ RAF
  update() {
    this.renderer.render( this.scene, this.camera )
  }

}

const _instance = new Canvas()
export default _instance