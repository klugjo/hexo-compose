import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import styles from './Home.scss';


export default class Home extends Component {
  static propTypes = {
    hexoPosts: PropTypes.object.isRequired
  };

  render() {
    const {hexoPosts} = this.props;
    return (
      <div>
        {hexoPosts.posts[hexoPosts.selectedPostIndex].content}
      </div>
    );
  }
}
