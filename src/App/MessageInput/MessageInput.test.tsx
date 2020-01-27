import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import MessageInput from './MessageInput';

const Component = MessageInput.WrappedComponent;

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});
