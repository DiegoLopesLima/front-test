jest.mock('react-router-dom');

import React from 'react';
import ReactDOM from 'react-dom';

import MessageBalloon from './MessageBalloon';

jest.mock('react-router-dom');

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MessageBalloon
      placement='left'
      body=''
      authorName=''
      creationDate={new Date}
      fromPrevious={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
