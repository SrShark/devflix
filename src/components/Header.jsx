import React, { Component } from 'react'

import { Logo } from '../components/Logo'
import { Search } from '../components/Search'
import { ProfileMenu } from '../components/ProfileMenu'
import logo from '../img/logo.svg'

const avatar = 'https://instagram.faep9-2.fna.fbcdn.net/vp/5956f1936ba9f64336798efd4e180999/5E7472CC/t51.2885-19/s150x150/66427814_2350657645222883_4660649448760672256_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net'

export class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'nombre'
    }
  }

  render () {
    return (
      <section className="l-section u-index--20 bg--secondary">
        <header className="c-header">
          {/* <button className="c-button--menu"></button> */}

          <a href="/">
            <Logo src={logo} />
          </a>

          <Search search={this.props.search} placeholder="¿Que estas buscando?" />

          <ProfileMenu name={this.state.name} avatar={avatar} />
        </header>
      </section>
    )
  }
}
