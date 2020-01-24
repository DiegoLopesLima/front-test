import { combineReducers } from 'redux';

import MessagesReducer from './MessagesReducer';

export default combineReducers({
  messages: MessagesReducer
});
