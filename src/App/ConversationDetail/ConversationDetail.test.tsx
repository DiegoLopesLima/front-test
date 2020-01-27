import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ConversationDetail from './ConversationDetail';
import { store } from '../../shared/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ conversationId: '1' })
}));

describe('<ConversationDetail />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <ConversationDetail />
        </Router>
      </Provider>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
