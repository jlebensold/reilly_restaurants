class CommentForm extends React.Component {
  constructor() {
    super()
    this.defaultState = { body: '', author: '' };
    this.state = this.defaultState;
  }

  submitComment(event) {
    event.preventDefault()
    this.state.id = 1
    Actions.addComment(this.state);
  }

  onFieldChange(event) {
    let prop = {}
    prop[event.target.name] = event.target.value;
    this.setState(prop)
  }

  render() {
    return <form>
      <label>Author</label>
      <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
      <label>Comment</label>
      <textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
      <button type="submit" onClick={this.submitComment.bind(this)} >Submit</button >
    </form>;
  }
}
export default CommentForm
