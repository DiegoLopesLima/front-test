import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Conversations from './Conversations';
import { store } from '../../shared/store';

describe('<Conversations />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Conversations />
        </Router>
      </Provider>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
