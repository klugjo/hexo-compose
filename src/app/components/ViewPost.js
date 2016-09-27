import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default class ViewPost extends Component {
  static propTypes = {
    hexoPosts: PropTypes.object.isRequired
  };

  render() {
    const {hexoPosts, params} = this.props;
    const currentPost = _.find(hexoPosts.posts, post => post.id === params.postId) || hexoPosts.posts[0];
    return (
      <div className="post-content" dangerouslySetInnerHTML={{ __html: currentPost ? currentPost.content : 'Not Found' }}></div>
    );
  }
}
