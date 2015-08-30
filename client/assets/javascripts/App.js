import CommentSection from './components/comment_section'
import React from 'react';
window.renderReact = function(id, component, props) {
  React.render(React.createElement(component, props), document.getElementById(id));
}
