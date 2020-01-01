import React, { Component } from 'react'

export class Logo extends Component {
  render () {
    return (
      <div className="c-logo">
        <figure>
          <img src={this.props.src} alt=""/>
        </figure>
        <p>DevFilx</p>
      </div>
    )
  }
}
