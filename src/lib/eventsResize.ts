  
import GSAP from 'gsap'

interface Resize {
  callbacks: {
    name: string
    callback: () => void
  }[]
}

class Resize {

  constructor() {
    this.callbacks = []
    this.bind()
  }

  init() {
    this.addEventsListeners()
  }
  
  // ------------------------------------------------ SUBSCRIBE
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

  // ------------------------------------------------ EVENTS
  onResize() {
    this.callbacks.forEach(item => item.callback() )
  }

  addEventsListeners() {
    if (!window)return
    window.addEventListener('resize', this.onResize)
  }

  // ------------------------------------------------ BIND
  bind() {
    this.onResize = this.onResize.bind(this)
  }
}

const _instance = new Resize()
export default _instance