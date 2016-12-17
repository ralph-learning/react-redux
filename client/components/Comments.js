import React from 'react';

const Comments = React.createClass({
  renderComments(comment, idx) {
    return (
      <div className="comment" key={idx}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, idx)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(event) {
    event.preventDefault();

    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="comment" placeholder="Comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
})

export default Comments;
