import { all } from 'redux-saga/effects';

import messagesSaga from './MessagesSaga';

export default function* root() {
  yield all([
    messagesSaga()
  ]);
}
