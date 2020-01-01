import React, { Component } from 'react'
import '../scss/app.scss'
import { VideoService } from '../js/services/Video.service'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import Container from '../components/Container'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  async searchVideos (videos) {
    try {
      this.setState({
        videos
      })
    } catch (e) { console.error(e) }
  }

  async componentDidMount () {
    const videoService = new VideoService()
    const videos = await videoService.searchVideos()

    this.setState({
      videos
    })
  }

  render () {
    return (
      <>
        <Header search={this.searchVideos.bind(this)} />
        <section className="l-section u-margin-vertical--lg">
          <div className="l-container">
            <Container grid gap="2" col="4">
              {this.state.videos.map((video) =>
                <Card key={video.id} data={video} />
              )}
            </Container>
          </div>
        </section>
      </>
    )
  }
}
