import CommentStore from '/stores/comment_store';
import Actions from '/actions';
import CommentList from '/components/comment_list';
import CommentForm from '/components/comment_form';

class CommentSection extends React.Component {
  constructor(props) {
    super()
    this.store = new CommentStore()
    this.actions = Actions
    this.actions.setComments(JSON.parse(props.comments));
  }

  static get childContextTypes() {
    return {
      store: React.PropTypes.object.isRequired,
      actions: React.PropTypes.func.isRequired
    }
  }

  getChildContext() {
    return {
      store: this.store,
      actions: this.actions
    }
  }

  render() {
    return <div>
      <CommentForm />
      <CommentList parent_id={null} />
    </div>
  }

}
window.CommentSection = CommentSection
export default CommentSection
