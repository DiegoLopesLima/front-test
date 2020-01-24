export function createMessages() {
  return ({ type: 'CREATE_MESSAGES' });
}

export function recordMessages() {
  return ({ type: 'RECORD_MESSAGES' });
}

export function updateMessages() {
  return ({ type: 'UPDATE_MESSAGES' });
}

export function deleteMessages() {
  return ({ type: 'DELETE_MESSAGES' });
}

export function resetMessages() {
  return ({ type: 'RESET_MESSAGES' });
}
