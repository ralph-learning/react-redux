import React from 'react';
import Photo from './Photo';
import Comments from './Comments';


const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const idx = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[idx];

    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo idx={idx} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
