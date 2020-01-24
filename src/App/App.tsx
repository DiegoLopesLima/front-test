import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { CNativeProps } from '../shared/interfaces/CNativeProps.interface';
import Conversations from './Conversations/Conversations';
import ConversationDetail from './ConversationDetail/ConversationDetail'
import { store } from '../shared/store';

const
  App: FC<CNativeProps> = () => {
    const
      conversations = [
        {
          id: 1,
          name: 'Mercado de trabalho',
          unreadMessages: 2,
          lastMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          id: 2,
          name: 'Ajuda',
          unreadMessages: 0,
          lastMessage: 'Ex alias, ipsum dicta architecto eum nulla facere aliquid facilis sapiente mollitia perferendis nemo et quae ducimus hic illo.'
        },
        {
          id: 3,
          name: 'Indicações',
          unreadMessages: 13,
          lastMessage: 'Sed, error dolores repudiandae iusto soluta in voluptate adipisci. Lorem ipsum dolor sit amet.'
        },
        {
          id: 4,
          name: 'Geral',
          unreadMessages: 0,
          lastMessage: 'Aliquid obcaecati vel eligendi necessitatibus.'
        }
      ];

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <div className='container-fluid px-0'>
                <div className='row no-gutters'>
                  <div className='col-3'>
                    <Conversations conversations={conversations} />
                  </div>

                  <div className='col'>
                    <ConversationDetail />
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  };

export default App;
