import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../shared/store';
import { CNativeProps } from '../shared/interfaces/CNativeProps.interface';
import Conversations from './Conversations/Conversations';
import ConversationDetail from './ConversationDetail/ConversationDetail'
import Home from './Home/Home';

import './App.scss';

const
  App: FC<CNativeProps> = () => {
    return (
      <Provider store={store}>
        <Router>
          <div className='container-fluid px-0'>
            <div className='row no-gutters'>
              <div className='sidebar col-auto'>
                <Conversations />

                <div className='text-primary align-items-center justify-content-center py-3 d-none d-lg-flex'>
                  <img src={require('../assets/images/favicon-16x16.png')} alt='' className='mr-1' />

                  Octadesk Chat
                </div>
              </div>

              <div className='col'>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>

                  <Route path='/conversation/:conversationId'>
                    <ConversationDetail />
                  </Route>

                  <Route path='*'>
                    <div className='min-vh-100'>
                      <div className='container pt-3'>
                        <div className='alert alert-danger'>
                          Não encontrado.
                        </div>
                      </div>
                    </div>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    )
  };

export default App;
