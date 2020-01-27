import { takeEvery, put, all, call } from 'redux-saga/effects';

import api from '../../services/api';
import { getParamsAsQueryString } from '../../helper';

function * createMessages(action) {
  try {
    const { data } = yield call(api.post, '/messages', action.payload);

    yield put({ type: 'CREATE_MESSAGES_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'CREATE_MESSAGES_FAILURE', error });
  }
}

function * recordMessages(action) {
  try {
    const { data } = yield call(api.get, `/messages${getParamsAsQueryString(action.filter, '?')}`);

    yield put({ type: 'RECORD_MESSAGES_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'RECORD_MESSAGES_FAILURE', error });
  }
}

function * updateMessages(action) {
  try {
    const { data } = yield call(api.put, '/messages', action.payload);

    yield put({ type: 'UPDATE_MESSAGES_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'UPDATE_MESSAGES_FAILURE', error });
  }
}

function * deleteMessages(action) {
  try {
    const { data } = yield call(api.delete, '/messages', action.payload);

    yield put({ type: 'DELETE_MESSAGES_SUCCESS', affected: data.affected });
  } catch (error) {
    yield put({ type: 'DELETE_MESSAGES_FAILURE', error });
  }
}

export default function * messagesSaga() {
  yield all([
    takeEvery('CREATE_MESSAGES', createMessages),
    takeEvery('RECORD_MESSAGES', recordMessages),
    takeEvery('UPDATE_MESSAGES', updateMessages),
    takeEvery('DELETE_MESSAGES', deleteMessages)
  ]);
}
