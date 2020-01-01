import React, { Component } from 'react'

export class Avatar extends Component {
  render () {
    return (
      <figure className={`c-avatar ${this.props.className}`}>
        <img src={this.props.avatar} alt=""/>
      </figure>
    )
  }
}
