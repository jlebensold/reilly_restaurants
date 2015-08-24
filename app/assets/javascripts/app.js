//
var Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

var Store = new _.extend({}, EventEmitter.prototype, {
  _comments: [],

  addComment: function(comment) {
    this._comments[comment.id] = comment;
  },

  comments: function() {
    return this._comments;
  },

  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  }
});

var AppDispatcher = new FluxDispatcher();

AppDispatcher.register(function(payload) {
  var action = payload.actionType;
  switch(action) {
    case Constants.ADD_COMMENT:
      Store.addComment(payload.comment);
      Store.emitChange();
      break;
    default:
      // NO-OP
  }
});

// Actions
var Actions = new _.extend({}, {
  addComment: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }
});

