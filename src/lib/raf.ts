  
import GSAP from 'gsap'

interface RAF {
  scrollCallback: () => void
  canvasCallback: () => void
  callbacks: {
    name: string
    callback: () => void
  }[]
}

class RAF {

  constructor() {
    this.callbacks = []
    this.bind()
  }

  init() {
    GSAP.ticker.fps(60)
    GSAP.ticker.add(this.render)
  }

  // ------------------------------------------------ SCROLL
  subscribeScroll(callback : () => void) {
    this.scrollCallback = callback
  }
  
  // ------------------------------------------------ CANVAS
  subscribeCanvas(callback : () => void) {
    this.canvasCallback = callback
  }
  
  // ------------------------------------------------ OTHERS
  subscribe(name : string, callback : () => void) {
    this.callbacks.push({
      name: name,
      callback: callback
    })
  }
  
  unsubscribe(name : string) {
    this.callbacks.forEach((item, i) => {
      if (item.name == name) this.callbacks.splice(i, i + 1)
    })
  }
  // ------------------------------------------------ RENDER
  render() {
    this.scrollCallback?.()
    this.callbacks.forEach(item => item.callback() )
    this.canvasCallback?.()
  }

  bind() {
    this.render = this.render.bind(this)
  }
}

const _instance = new RAF()
export default _instance