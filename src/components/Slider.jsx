import React, { Component } from 'react'
import Swiper from 'swiper'

export default class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slider: {}
    }
  }

  setSlider () {
    this.setState({
      slider: new Swiper(`#${this.props.sliderID}`, this.props.config)
    })
  }

  componentDidMount () {
    this.setSlider() // Instancia del slider.
  }

  componentDidUpdate () {
    this.state.slider.update() // Actualizo la instancia para que funcione correctamente.
  }

  render () {
    return (
      <section id={this.props.sliderID} className="swiper-container">
        <div className="swiper-wrapper">
          {this.props.children}
        </div>
      </section>
    )
  }
}
