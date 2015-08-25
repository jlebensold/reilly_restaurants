import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api'

class Actions {
  static setComments(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    });
  }

  static addComment(params) {
    Api.post('/restaurants/1/comments', {
      comment: params
    })
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }
}
export default Actions
