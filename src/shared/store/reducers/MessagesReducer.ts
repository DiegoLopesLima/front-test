interface MessagesState {
  messages: any[],
  loading: boolean,
  loaded: boolean,
  error: any
}

const
  INITIAL_STATE: MessagesState = {
    messages: [],
    loading: false,
    loaded: false,
    error: false
  },
  MessagesReducer = (state: MessagesState = INITIAL_STATE, { type, affected, error }) => {
    switch (type) {
      case 'CREATE_MESSAGES':
        return { ...state, loading: true };
      case 'CREATE_MESSAGES_SUCCESS':
        return { ...state, messages: [ ...state.messages, ...affected ], loading: false, error: false };
      case 'CREATE_MESSAGES_FAILURE':
        return { ...state, loading: false, error };
      case 'RECORD_MESSAGES':
        return { ...state, loading: true, loaded: false };
      case 'RECORD_MESSAGES_SUCCESS':
        return { ...state, messages: affected, loading: false, loaded: true, error: false };
      case 'RECORD_MESSAGES_FAILURE':
        return { ...state, messages: [], loading: false, loaded: true, error };
      case 'UPDATE_MESSAGES':
        return { ...state, loading: true };
      case 'UPDATE_MESSAGES_SUCCESS':
        return {
          ...state,
          messages: state.messages.map(message => {
            const updated = affected.find((item: any) => item.id === message.id);

            if (updated) {
              return updated;
            }

            return message;
          }),
          loading: false,
          error: false
        };
      case 'UPDATE_MESSAGES_FAILURE':
        return { ...state, loading: false, error };
      case 'DELETE_MESSAGES':
        return { ...state, loading: true };
      case 'DELETE_MESSAGES_SUCCESS':
        return {
          ...state,
          messages: state.messages.filter(message => !affected.some((item: any) => item.id === message.id)),
          loading: false,
          error: false
        };
      case 'DELETE_MESSAGES_FAILURE':
        return { ...state, loading: false, error };
      case 'RESET_MESSAGES':
        return INITIAL_STATE;
      default:
        return state;
    }
  };

export default MessagesReducer;
