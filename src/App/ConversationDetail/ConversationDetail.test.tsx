import React from 'react';
import ReactDOM from 'react-dom';

import ConversationDetail from './ConversationDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ConversationDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
