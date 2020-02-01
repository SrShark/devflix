import React, { Component } from 'react'
import '../scss/app.scss'
import { VideoService } from '../js/services/Video.service'
import { Header } from '../components/Header'
import Slider from '../components/Slider'
import Card from '../components/Card'
import Container from '../components/Container'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      sliderVideos: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 300
        }
      },
      sliderVideos2: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 1000
        }
      }
    }
  }

  async componentDidMount () {
    try {
      const videoService = new VideoService()
      const videos = await videoService.searchVideos()

      this.setState({
        videos
      })
    } catch (e) { console.error(e) }
  }

  async searchVideos (videos) {
    try {
      this.setState({
        videos
      })
    } catch (e) { console.error(e) }
  }

  listVideos () {
    return this.state.videos.map((video) =>
      <Card key={video.id} data={video} className="swiper-slide" />
    )
  }

  render () {
    return (
      <>
        <Header search={this.searchVideos.bind(this)} />

        <Container wrap className="u-margin-vertical--lg">
          <Slider sliderID="sliderVideos" config={this.state.sliderVideos}>
            { this.listVideos() }
          </Slider>
        </Container>

        <Container wrap className="u-margin-vertical--lg">
          <Slider sliderID="sliderVideos2" config={this.state.sliderVideos2}>
            { this.listVideos() }
          </Slider>
        </Container>
      </>
    )
  }
}
