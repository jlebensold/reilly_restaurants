import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import * as reducers from  '../reducers';
import CommentContainer from './comment_container';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


class CommentSection extends React.Component {
  constructor(props) {
    super();
    this.restaurantId = props.restaurantId;
    this.comments = props.comments;
  }

  render() {
    const store = createStoreWithMiddleware(reducer, { comments: this.comments } );
    return <Provider store={store}>
      { () => <CommentContainer restaurantId={this.restaurantId} /> }
    </Provider>
  }

}
export default CommentSection;
