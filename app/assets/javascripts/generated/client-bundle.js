/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsComment_section = __webpack_require__(4);

	var _componentsComment_section2 = _interopRequireDefault(_componentsComment_section);

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _storesComment_store = __webpack_require__(5);

	var _storesComment_store2 = _interopRequireDefault(_storesComment_store);

	var _actions = __webpack_require__(6);

	var _actions2 = _interopRequireDefault(_actions);

	var _comment_list = __webpack_require__(7);

	var _comment_list2 = _interopRequireDefault(_comment_list);

	var _comment_form = __webpack_require__(8);

	var _comment_form2 = _interopRequireDefault(_comment_form);

	var CommentSection = (function (_React$Component) {
	  _inherits(CommentSection, _React$Component);

	  function CommentSection(props) {
	    _classCallCheck(this, CommentSection);

	    _get(Object.getPrototypeOf(CommentSection.prototype), 'constructor', this).call(this);
	    this.store = new _storesComment_store2['default']();
	    this.actions = new _actions2['default'](props.restaurantId);
	    this.actions.setComments(JSON.parse(props.comments));
	  }

	  _createClass(CommentSection, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        store: this.store,
	        actions: this.actions
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(_comment_form2['default'], { isReplying: true }),
	        React.createElement(_comment_list2['default'], { parent_id: null })
	      );
	    }
	  }], [{
	    key: 'childContextTypes',
	    get: function get() {
	      return {
	        store: React.PropTypes.object.isRequired,
	        actions: React.PropTypes.object.isRequired
	      };
	    }
	  }]);

	  return CommentSection;
	})(React.Component);

	window.CommentSection = CommentSection;
	exports['default'] = CommentSection;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _app_dispatcher = __webpack_require__(12);

	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);

	var _constants = __webpack_require__(10);

	var _constants2 = _interopRequireDefault(_constants);

	var CommentStore = (function (_EventEmitter) {
	  _inherits(CommentStore, _EventEmitter);

	  function CommentStore() {
	    var _this = this;

	    _classCallCheck(this, CommentStore);

	    _get(Object.getPrototypeOf(CommentStore.prototype), 'constructor', this).call(this);
	    this._comments = [];

	    _app_dispatcher2['default'].register(function (payload) {
	      switch (payload.actionType) {
	        case _constants2['default'].SET_COMMENTS:
	          _this.setComments(payload.comments);
	          _this.emitChange();
	          break;
	        case _constants2['default'].UPVOTE_COMMENT:
	          _this.upvote(payload.comment);
	          _this.emitChange();
	          break;
	        case _constants2['default'].ADD_COMMENT:
	          _this.addComment(payload.comment);
	          _this.emitChange();
	          break;
	        default:
	        // NO-OP
	      }
	    });
	  }

	  _createClass(CommentStore, [{
	    key: 'setComments',
	    value: function setComments(comments) {
	      var _this2 = this;

	      comments.forEach(function (comment) {
	        _this2.addComment(comment);
	      });
	    }
	  }, {
	    key: 'upvote',
	    value: function upvote(comment) {
	      this._comments[comment.id].rank++;
	    }
	  }, {
	    key: 'addComment',
	    value: function addComment(comment) {
	      this._comments[comment.id || this._comments.length] = comment;
	    }
	  }, {
	    key: 'comments',
	    value: function comments(parentId) {
	      return _.chain(this._comments.filter(function (c) {
	        return c && c.parent_id === parentId;
	      })).sortBy('rank').reverse().value();
	    }
	  }, {
	    key: 'addChangeListener',
	    value: function addChangeListener(callback) {
	      this.on(_constants2['default'].CHANGE_EVENT, callback);
	    }
	  }, {
	    key: 'removeChangeListener',
	    value: function removeChangeListener(callback) {
	      this.removeListener(_constants2['default'].CHANGE_EVENT, callback);
	    }
	  }, {
	    key: 'emitChange',
	    value: function emitChange() {
	      this.emit(_constants2['default'].CHANGE_EVENT);
	    }
	  }]);

	  return CommentStore;
	})(EventEmitter);

	exports['default'] = CommentStore;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _app_dispatcher = __webpack_require__(12);

	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);

	var _constants = __webpack_require__(10);

	var _constants2 = _interopRequireDefault(_constants);

	var _api = __webpack_require__(11);

	var _api2 = _interopRequireDefault(_api);

	var Actions = (function () {
	  function Actions(restaurantId) {
	    _classCallCheck(this, Actions);

	    this.restaurantId = restaurantId;
	    this.watchInterval = setInterval(this.watch.bind(this), 1000);
	  }

	  _createClass(Actions, [{
	    key: 'setComments',
	    value: function setComments(params) {
	      _app_dispatcher2['default'].dispatch({
	        actionType: _constants2['default'].SET_COMMENTS,
	        comments: params
	      });
	    }
	  }, {
	    key: 'upvoteComment',
	    value: function upvoteComment(comment) {
	      _api2['default'].put('/restaurants/' + this.restaurantId + '/comments/' + comment.id + '/upvote').then(function (comment) {
	        _app_dispatcher2['default'].dispatch({
	          actionType: _constants2['default'].UPVOTE_COMMENT,
	          comment: comment
	        });
	      });
	    }
	  }, {
	    key: 'addComment',
	    value: function addComment(params) {
	      _api2['default'].post('/restaurants/' + this.restaurantId + '/comments', {
	        comment: params
	      }).then(function (comment) {
	        _app_dispatcher2['default'].dispatch({
	          actionType: _constants2['default'].ADD_COMMENT,
	          comment: comment
	        });
	      });
	    }
	  }, {
	    key: 'watch',
	    value: function watch() {
	      var _this = this;

	      _api2['default'].get('/restaurants/' + this.restaurantId + '/comments').then(function (comments) {
	        _this.setComments(comments);
	      });
	    }
	  }]);

	  return Actions;
	})();

	exports['default'] = Actions;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _comment = __webpack_require__(9);

	var _comment2 = _interopRequireDefault(_comment);

	var CommentList = (function (_React$Component) {
	  _inherits(CommentList, _React$Component);

	  function CommentList() {
	    _classCallCheck(this, CommentList);

	    _get(Object.getPrototypeOf(CommentList.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(CommentList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.store.addChangeListener(this._onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.store.removeChangeListener(this._onChange.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'ul',
	        null,
	        this.context.store.comments(this.props.parent_id).map(function (comment, i) {
	          return React.createElement(_comment2['default'], _extends({ key: i }, comment));
	        })
	      );
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.forceUpdate();
	    }
	  }], [{
	    key: 'contextTypes',
	    get: function get() {
	      return {
	        store: React.PropTypes.object.isRequired
	      };
	    }
	  }]);

	  return CommentList;
	})(React.Component);

	exports['default'] = CommentList;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentForm = (function (_React$Component) {
	  _inherits(CommentForm, _React$Component);

	  _createClass(CommentForm, null, [{
	    key: 'contextTypes',
	    get: function get() {
	      return {
	        actions: React.PropTypes.object.isRequired
	      };
	    }
	  }, {
	    key: 'propTypes',
	    get: function get() {
	      return {
	        isReplying: React.PropTypes.bool,
	        onCommentSubmitted: React.PropTypes.func,
	        parent_id: React.PropTypes.number
	      };
	    }
	  }]);

	  function CommentForm(props) {
	    _classCallCheck(this, CommentForm);

	    _get(Object.getPrototypeOf(CommentForm.prototype), 'constructor', this).call(this);
	    this.defaultState = { body: '', author: '' };
	    this.state = this.defaultState;
	  }

	  _createClass(CommentForm, [{
	    key: 'submitComment',
	    value: function submitComment(event) {
	      event.preventDefault();
	      this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }));
	      this.setState(this.defaultState);
	      if (this.props.onCommentSubmitted) {
	        this.props.onCommentSubmitted();
	      }
	    }
	  }, {
	    key: 'onFieldChange',
	    value: function onFieldChange(event) {
	      var prop = {};
	      prop[event.target.name] = event.target.value;
	      this.setState(prop);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'form',
	          { className: this.props.isReplying ? '' : 'hide' },
	          React.createElement(
	            'label',
	            null,
	            'Author'
	          ),
	          React.createElement('input', { type: 'text', name: 'author', onChange: this.onFieldChange.bind(this), value: this.state.author }),
	          React.createElement(
	            'label',
	            null,
	            'Comment'
	          ),
	          React.createElement('textarea', { name: 'body', value: this.state.body, onChange: this.onFieldChange.bind(this) }),
	          React.createElement(
	            'button',
	            { type: 'submit', onClick: this.submitComment.bind(this) },
	            'Submit'
	          )
	        )
	      );
	    }
	  }]);

	  return CommentForm;
	})(React.Component);

	exports['default'] = CommentForm;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _comment_form = __webpack_require__(8);

	var _comment_form2 = _interopRequireDefault(_comment_form);

	var _comment_list = __webpack_require__(7);

	var _comment_list2 = _interopRequireDefault(_comment_list);

	var Comment = (function (_React$Component) {
	  _inherits(Comment, _React$Component);

	  _createClass(Comment, null, [{
	    key: 'contextTypes',
	    get: function get() {
	      return {
	        actions: React.PropTypes.object.isRequired
	      };
	    }
	  }, {
	    key: 'propTypes',
	    get: function get() {
	      return {
	        id: React.PropTypes.number,
	        author: React.PropTypes.string,
	        body: React.PropTypes.string,
	        rank: React.PropTypes.number
	      };
	    }
	  }]);

	  function Comment() {
	    _classCallCheck(this, Comment);

	    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this);
	    this.state = { isReplying: false };
	  }

	  _createClass(Comment, [{
	    key: 'onToggleReply',
	    value: function onToggleReply() {
	      this.setState({ isReplying: !this.state.isReplying });
	    }
	  }, {
	    key: 'onUpvote',
	    value: function onUpvote(event) {
	      this.context.actions.upvoteComment(this.props);
	    }
	  }, {
	    key: 'onCommentSubmitted',
	    value: function onCommentSubmitted(event) {
	      this.setState({ isReplying: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var replyText = this.state.isReplying ? 'Hide' : 'Reply';
	      return React.createElement(
	        'li',
	        { className: 'comment row collapse' },
	        React.createElement(
	          'blockquote',
	          null,
	          this.props.body,
	          React.createElement(
	            'cite',
	            null,
	            'by ',
	            this.props.author,
	            React.createElement(
	              'span',
	              { className: 'label secondary right' },
	              this.props.rank
	            )
	          )
	        ),
	        React.createElement(
	          'button',
	          { className: 'button tiny secondary', onClick: this.onToggleReply.bind(this) },
	          replyText
	        ),
	        React.createElement(
	          'button',
	          { className: 'button tiny', onClick: this.onUpvote.bind(this) },
	          '+1'
	        ),
	        React.createElement(_comment_form2['default'], {
	          parent_id: this.props.id,
	          isReplying: this.state.isReplying,
	          onCommentSubmitted: this.onCommentSubmitted.bind(this)
	        }),
	        React.createElement(_comment_list2['default'], { parent_id: this.props.id })
	      );
	    }
	  }]);

	  return Comment;
	})(React.Component);

	exports['default'] = Comment;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var Constants = {
	  CHANGE_EVENT: 'change',
	  ADD_COMMENT: 'comments.add',
	  SET_COMMENTS: 'comments.set_comments',
	  UPVOTE_COMMENT: 'comments.upvote'
	};
	exports['default'] = Constants;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Api = (function () {
	  function Api() {
	    _classCallCheck(this, Api);
	  }

	  _createClass(Api, null, [{
	    key: 'token',
	    value: function token() {
	      var el = document.querySelector('meta[name="csrf-token"]');
	      return el ? el.getAttribute('content') : '';
	    }
	  }, {
	    key: 'headers',
	    value: function headers() {
	      return {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'X-CSRF-Token': this.token(),
	        'X-Requested-With': 'XMLHttpRequest'
	      };
	    }
	  }, {
	    key: 'get',
	    value: function get(route, params) {
	      return this.xhr(route, params, 'get');
	    }
	  }, {
	    key: 'put',
	    value: function put(route, params) {
	      return this.xhr(route, params, 'put');
	    }
	  }, {
	    key: 'post',
	    value: function post(route, params) {
	      return this.xhr(route, params, 'post');
	    }
	  }, {
	    key: 'xhr',
	    value: function xhr(route, params, verb) {
	      return fetch(route + '.json', _.merge({
	        method: verb,
	        credentials: 'include',
	        headers: this.headers()
	      }, { body: JSON.stringify(params) })).then(function (resp) {
	        return resp.json();
	      });
	    }
	  }]);

	  return Api;
	})();

	exports['default'] = Api;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AppDispatcher = new FluxDispatcher();
	exports["default"] = AppDispatcher;
	module.exports = exports["default"];

/***/ }
/******/ ]);