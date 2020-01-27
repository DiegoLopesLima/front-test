export function createConversations(payload) {
  return ({ type: 'CREATE_CONVERSATIONS', payload });
}

export function recordConversations() {
  return ({ type: 'RECORD_CONVERSATIONS' });
}

export function updateConversations() {
  return ({ type: 'UPDATE_CONVERSATIONS' });
}

export function deleteConversations() {
  return ({ type: 'DELETE_CONVERSATIONS' });
}

export function resetConversations() {
  return ({ type: 'RESET_CONVERSATIONS' });
}
