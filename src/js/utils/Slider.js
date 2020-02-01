import Swiper from 'swiper'

export default class Slider {
  constructor (id, config) {
    this.id = id
    this.config = config
    this.swiper = null
    this.init()
  }

  // Detiene el slider al pasar el mouse por encima.
  setEvents (slider) {
    slider.addEventListener('mouseenter', () => this.swiper.autoplay.stop())
    slider.addEventListener('mouseleave', () => this.swiper.autoplay.start())
  }

  removeControls (slider) {
    console.log(this.swiper.$el)
  }

  setControls (slider) {
    if (this.config.pagination !== undefined) {
      const pagination = document.createElement('div')

      pagination.classList.add('swiper-pagination')
      slider.appendChild(pagination)
    }

    if (this.config.navigation !== undefined) {
      const prev = document.createElement('button')
      const next = document.createElement('button')

      const nextEl = this.config.navigation.nextEl.split('.')[1]
      const prevEl = this.config.navigation.prevEl.split('.')[1]

      prev.classList.add(this.config.navigation.classPrev, prevEl)
      next.classList.add(this.config.navigation.classNext, nextEl)

      slider.parentElement.appendChild(prev)
      slider.parentElement.appendChild(next)
    }
  }

  init () {
    this.swiper = new Swiper(this.id, this.config)
    const slider = document.querySelector(this.id)

    this.setControls(slider)
    this.swiper.init() // Inicio de la instancia.
    this.setEvents(slider)
  }
}
