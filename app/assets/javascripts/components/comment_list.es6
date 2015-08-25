class CommentList extends React.Component {

  componentDidMount() {
    this.props.store.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    this.props.store.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return <div>
        {this.props.store.comments().map(function(comment) {
          return <Comment key={comment.id} {... comment}  />;
        })}
      </div>;
  }

  _onChange() {
    this.forceUpdate();
  }
}
export default CommentList
