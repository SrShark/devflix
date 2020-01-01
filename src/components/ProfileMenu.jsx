import React, { Component } from 'react'
import { Avatar } from '../components/Avatar'

export class ProfileMenu extends Component {
  render () {
    return (
      <div className="c-profile-menu">
        <a href="/perfil.html">
          <Avatar avatar={this.props.avatar}/>
        </a>
      </div>
    )
  }
}
