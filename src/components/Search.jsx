import React, { Component } from 'react'
import { VideoService } from '../js/services/Video.service'

export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  async handleFormSearch (event) {
    if (event.key === 'Enter') {
      const videoService = new VideoService()
      const videos = await videoService.searchVideos(event.target.value)

      return this.props.search(videos)
    }
  }

  render () {
    return (
      <div className="c-search">
        <input
          type="text"
          placeholder={this.props.placeholder}
          onKeyDown={this.handleFormSearch.bind(this)} />
      </div>
    )
  }
}
