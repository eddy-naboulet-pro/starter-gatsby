  
import RAF from './raf'

import GSAP from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

import RESIZE from './eventsResize'

GSAP.registerPlugin(ScrollTrigger)

interface Scroll {
  ASScroll: any
  ScrollContainer: HTMLElement
  isSet: boolean
}

class Scroll {

  constructor() {
    this.update = this.update.bind(this)
    this.onResize = this.onResize.bind(this)
    this.isSet = false
  }

  init() {
    const ASScroll = require('@ashthornton/asscroll')
    
    this.ASScroll = new ASScroll({ disableRaf: true, disableResize: true, scrollElements : document.querySelector(".scroll-wrap") })
    this.ASScroll.enable()

    RAF.subscribeScroll(this.update)
    RESIZE.subscribe('resizeSCROLL', this.onResize)
    
    this.isSet = true
  }

  disable() {
    this.ASScroll.disable()
  }

  update() {
    this.ASScroll.update()
  }

  onResize() {
    this.ASScroll.resize(document.querySelector(".scroll-wrap"), window.innerWidth, window.innerHeight)
  }

  reset() {
    this.ASScroll.enable({ newScrollElements: document.querySelector(".scroll-wrap"), reset: true })
    RAF.subscribeScroll(this.update)
  }
}

const _instance = new Scroll()
export default _instance