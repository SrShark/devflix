import React, { Component } from 'react'

export default class Container extends Component {
  computedClassName () {
    const computed = []
    const classes = {
      'l-grid': this.props.grid,
      'l-gap': this.props.gap
    }

    for (const key in classes) {
      if (classes[key]) computed.push(key)
    }

    return computed.join(' ')
  }

  render () {
    const className = this.computedClassName()

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
