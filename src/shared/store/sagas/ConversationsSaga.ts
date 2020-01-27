import { takeEvery, put, all, call } from 'redux-saga/effects';

import api from '../../services/api';
import { getParamsAsQueryString } from '../../helper';

function * createConversations(action) {
  try {
    const { data } = yield call(api.post, '/conversations', action.payload);

    yield put({ type: 'CREATE_CONVERSATIONS_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'CREATE_CONVERSATIONS_FAILURE', error });
  }
}

function * recordConversations(action) {
  try {
    const { data } = yield call(api.get, `/conversations${getParamsAsQueryString(action.filter, '?')}`);

    yield put({ type: 'RECORD_CONVERSATIONS_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'RECORD_CONVERSATIONS_FAILURE', error });
  }
}

function * updateConversations(action) {
  try {
    const { data } = yield call(api.put, '/conversations', action.data);

    yield put({ type: 'UPDATE_CONVERSATIONS_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'UPDATE_CONVERSATIONS_FAILURE', error });
  }
}

function * deleteConversations(action) {
  try {
    const { data } = yield call(api.delete, '/conversations', action.data);

    yield put({ type: 'DELETE_CONVERSATIONS_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'DELETE_CONVERSATIONS_FAILURE', error });
  }
}

export default function * conversationsSaga() {
  yield all([
    takeEvery('CREATE_CONVERSATIONS', createConversations),
    takeEvery('RECORD_CONVERSATIONS', recordConversations),
    takeEvery('UPDATE_CONVERSATIONS', updateConversations),
    takeEvery('DELETE_CONVERSATIONS', deleteConversations)
  ]);
}
