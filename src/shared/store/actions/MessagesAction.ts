export function createMessages(payload) {
  return ({ type: 'CREATE_MESSAGES', payload });
}

export function recordMessages(filter) {
  return ({ type: 'RECORD_MESSAGES', filter });
}

export function updateMessages(payload) {
  return ({ type: 'UPDATE_MESSAGES', payload });
}

export function deleteMessages(payload) {
  return ({ type: 'DELETE_MESSAGES', payload });
}

export function resetMessages() {
  return ({ type: 'RESET_MESSAGES' });
}
