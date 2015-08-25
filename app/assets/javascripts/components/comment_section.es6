import CommentStore from '/stores/comment_store';
import Actions from '/actions';
import CommentList from '/components/comment_list';

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
    return <CommentList />
  }

}
window.Actions = Actions
window.CommentSection = CommentSection
export default CommentSection
