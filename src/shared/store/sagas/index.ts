import { all } from 'redux-saga/effects';

import messagesSaga from './MessagesSaga';
import conversationsSaga from './ConversationsSaga';

export default function* root() {
  yield all([
    messagesSaga(),
    conversationsSaga()
  ]);
}
