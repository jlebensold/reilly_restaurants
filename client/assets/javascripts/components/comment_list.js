import Comment from './comment';
import React from 'react';
import _ from 'lodash';
class CommentList extends React.Component {

  static get propTypes() {
    return {
      actions: React.PropTypes.object,
      parent_id: React.PropTypes.number,
      restaurantId: React.PropTypes.number
    }
  }

  commentsFiltered(comments, parentId) {
    return _.chain(comments)
      .select(c => { return c && c.parent_id === parentId; })
      .sortBy('rank')
      .reverse()
      .value();
  }

  hasChildren(comments, comment) {
    return _.any(comments, c => { return c && c.parent_id === comment.id; });
  }

  render() {
    const { comments } = this.props;
    const filteredComments = this.commentsFiltered(comments, this.props.parent_id);

    return (
      <ul>
        {filteredComments.map( comment => {
          return (<Comment
          key={comment.id}
          hasChildren={this.hasChildren(comments, comment)}
          {...this.props}
          {...comment}
        />)
        })}
      </ul>
    );
  }
}
export default CommentList
