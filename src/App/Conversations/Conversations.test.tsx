import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Conversations from './Conversations';

describe('render', () => {
  const
    conversationsMock = [
      { id: 1, name: 'Lorem', unreadMessages: 1, lastMessage: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quidem.' },
      { id: 2, name: 'Ipsum', unreadMessages: 0, lastMessage: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quidem.' },
      { id: 3, name: 'Dolor', unreadMessages: 0, lastMessage: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quidem.' }
    ];

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Conversations conversations={conversationsMock} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders conversation list', () => {
    const wrapper = shallow(<Conversations conversations={conversationsMock} />);

    expect(wrapper.find('.list-group-item').length).toEqual(3);
  });
});
