import React, { Component } from 'react';
import autobind from 'autobind-decorator'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import _ from 'lodash'
import styles from './nav-bar.scss'

@observer
@CSSModules(styles)
export default class NavBar extends Component {

  render() {
    const { user } = this.props

    return (
      <div styleName="nav-bar">
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              <i className="fa fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <a href>
              <i className="fa fa-heart"></i>
              Matches
            </a>
          </li>
          <li styleName="profile">
            <a href>
              <div styleName="avatar">
                {!user.isLoading && <img src={user.photos[0].url} alt="avatar" />}
              </div>
              <div styleName="name">
                {this.props.user.full_name}
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
