import React, { Component } from 'react'
import { wrapText } from '../js/utils/wrapText'
import { Avatar } from './Avatar'

export class Card extends Component {
  constructor (props) {
    super(props)
    this.NO_DESCRIPTION = 'Este video no contiene descripción'
    this.state = {
      video: {
        id: this.props.data.id,
        link: `https://www.youtube.com/watch?v=${this.props.data.id}`,
        title: this.props.data.snippet.title,
        description: this.computedDescription(this.props.data.snippet.description),
        thumbnail: this.props.data.snippet.thumbnails.high.url,
        tag: this.computedTags(),
        channel: {
          id: this.props.data.channel.id,
          thumbnail: this.props.data.channel.thumbnail,
          link: `https://www.youtube.com/channel/${this.props.data.channel.id}`
        }
      }
    }
  }

  computedTags () {
    if (this.props.data.snippet.tags) {
      return this.props.data.snippet.tags[0]
    } else {
      return null
    }
  }

  hasTag (tag) {
    if (tag !== null) {
      return tag
    } else {
      return 'sin tag'
    }
  }

  computedDescription (description) {
    description !== ''
      ? description = wrapText(description, 100)
      : description = this.NO_DESCRIPTION

    return description
  }

  render () {
    const { video } = this.state

    return (
      <article className="c-card">
        <div>
          <a href={video.link} className="c-card__image" target="_blank" rel="noopener noreferrer">
            <figure>
              <img src={video.thumbnail} alt={video.title}/>
            </figure>
          </a>

          <div className="c-card__info">
            <h4>
              <a href={video.link} target="_blank" rel="noopener noreferrer">{video.title}</a>
            </h4>
            <p>{video.description}</p>
          </div>
        </div>

        <div className="c-card__footer u-border-top">
          <a href="/" className="c-card__tag">
            <p>{this.hasTag(video.tag)}</p>
          </a>

          <a href={video.channel.link} target="_blank" rel="noopener noreferrer">
            <Avatar className="c-card__author" avatar={video.channel.thumbnail}/>
          </a>
        </div>
      </article>
    )
  }
}
