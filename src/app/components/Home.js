import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default class Home extends Component {
  static propTypes = {
    hexoPosts: PropTypes.object.isRequired
  };

  render() {
    const {hexoPosts} = this.props;
    const currentPost = hexoPosts.posts[hexoPosts.selectedPostIndex];
    return (
      <div className="post-content" dangerouslySetInnerHTML={{ __html: currentPost ? currentPost.content : 'Not Found' }}></div>
    );
  }
}
