import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import MarkdownTextBox from './MarkdownTextBox';

export default class Editor extends Component {
  static propTypes = {
    hexoPosts: PropTypes.object.isRequired
  };

  render() {
    const {hexoPosts, params} = this.props;
    const postToEdit = _.find(hexoPosts.posts, post => post.id === params.postId);
    return (
      <MarkdownTextBox value={postToEdit.source} onChange={() => {}} />
    );
  }
}
