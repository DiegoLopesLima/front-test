import { combineReducers } from 'redux';

import MessagesReducer from './MessagesReducer';
import ConversationsReducer from './ConversationsReducer';

export default combineReducers({
  messages: MessagesReducer,
  conversations: ConversationsReducer
});
