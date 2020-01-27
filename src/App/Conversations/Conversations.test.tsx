import React from 'react';
import ReactDOM from 'react-dom';

import Conversations from './Conversations';

const Component = Conversations.WrappedComponent;

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});
