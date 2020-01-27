interface ConversationsState {
  conversations: any[],
  loading: boolean,
  loaded: boolean,
  error: any
}

const
  INITIAL_STATE: ConversationsState = {
    conversations: [],
    loading: false,
    loaded: false,
    error: false
  },
  ConversationsReducer = (state: ConversationsState = INITIAL_STATE, { type, affected, error }) => {
    switch (type) {
      case 'CREATE_CONVERSATIONS':
        return { ...state, loading: true };
      case 'CREATE_CONVERSATIONS_SUCCESS':
        return { ...state, conversations: [ ...state.conversations, ...affected ], loading: false, error: false };
      case 'CREATE_CONVERSATIONS_FAILURE':
        return { ...state, loading: false, error };
      case 'RECORD_CONVERSATIONS':
        return { ...state, loading: true, loaded: false };
      case 'RECORD_CONVERSATIONS_SUCCESS':
        return { ...state, conversations: affected, loading: false, loaded: true, error: false };
      case 'RECORD_CONVERSATIONS_FAILURE':
        return { ...state, conversations: [], loading: false, loaded: true, error };
      case 'UPDATE_CONVERSATIONS':
        return { ...state, loading: true };
      case 'UPDATE_CONVERSATIONS_SUCCESS':
        return {
          ...state,
          conversations: state.conversations.map(conversation => {
            const updated = affected.find((item: any) => item.id === conversation.id);

            if (updated) {
              return updated;
            }

            return conversation;
          }),
          loading: false,
          error: false
        };
      case 'UPDATE_CONVERSATIONS_FAILURE':
        return { ...state, loading: false, error };
      case 'DELETE_CONVERSATIONS':
        return { ...state, loading: true };
      case 'DELETE_CONVERSATIONS_SUCCESS':
        return {
          ...state,
          conversations: state.conversations.filter(conversation => !affected.some((item: any) => item.id === conversation.id)),
          loading: false,
          error: false
        };
      case 'DELETE_CONVERSATIONS_FAILURE':
        return { ...state, loading: false, error };
      case 'RESET_CONVERSATIONS':
        return INITIAL_STATE;
      default:
        return state;
    }
  };

export default ConversationsReducer;
