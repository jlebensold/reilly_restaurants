import CommentForm from './comment_form';
import CommentList from './comment_list';
import React from 'react';
class Comment extends React.Component{

  static get propTypes() {
    return {
      id: React.PropTypes.number,
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      rank: React.PropTypes.number
    }
  }

  constructor() {
    super()
    this.state = { isReplying: false }
  }

  onToggleReply() {
    this.setState({isReplying: !this.state.isReplying});
  }

  onUpvote(event) {
    this.props.actions.upvoteComment(this.props.restaurantId, this.props);
  }

  onCommentSubmitted(event) {
    this.setState({isReplying: false });
  }

  render() {
    const replyText = this.state.isReplying ? 'Hide' : 'Reply';
    return (
      <li className='comment row collapse'>
        <blockquote>
          {this.props.body}
          <cite>
            by {this.props.author}
            <span className='label secondary right'>{this.props.rank}</span>
          </cite>
        </blockquote>
        <button className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</button>
        <button className='button tiny' onClick={this.onUpvote.bind(this)}>+1</button>
        <CommentForm
          parent_id={this.props.id}
          isReplying={this.state.isReplying}
          addComment={this.props.actions.addComment}
          restaurantId={this.props.restaurantId}
          onCommentSubmitted={this.onCommentSubmitted.bind(this)}
          />
        <CommentList {...this.props} parent_id={this.props.id} />
      </li>);
  }

}
export default Comment;
