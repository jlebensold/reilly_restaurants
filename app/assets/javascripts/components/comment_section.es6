import CommentStore from '/stores/comment_store';
import Actions from '/actions';
import CommentList from '/components/comment_list';
import CommentForm from '/components/comment_form';

class CommentSection extends React.Component {
  constructor() {
    super()
    this.store = new CommentStore()
  }

  static get childContextTypes() {
    return {
      store: React.PropTypes.object.isRequired
    }
  }

  getChildContext() {
    return {
      store: this.store
    }
  }

  render() {
    return <div>
      <CommentForm />
      <CommentList />
    </div>
  }

}
window.Actions = Actions
window.CommentSection = CommentSection
export default CommentSection
