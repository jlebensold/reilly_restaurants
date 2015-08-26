import CommentForm from './comment_form';
import CommentList from './comment_list';
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

  render() {
    const replyText = this.state.isReplying ? 'Hide' : 'Reply';
    return (
      <li className='comment row collapse'>
        <blockquote>
          {this.props.body}
          <cite> 
            by {this.props.author}
          </cite>
        </blockquote>
        <button className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</button>
        <CommentForm parent_id={this.props.id} isReplying={this.state.isReplying} />
        <CommentList parent_id={this.props.id} />
      </li>);
  }

}
export default Comment;
