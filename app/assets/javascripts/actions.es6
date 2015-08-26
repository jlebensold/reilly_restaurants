import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api'

class Actions {

  constructor(restaurantId) {
    this.restaurantId = restaurantId
  }

  setComments(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    });
  }

  upvoteComment(comment) {
    Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.UPVOTE_COMMENT,
        comment: comment
      });
    });
  }

  addComment(params) {
    Api.post(`/restaurants/${this.restaurantId}/comments`, {
      comment: params
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      });
    })
  }
}
export default Actions
