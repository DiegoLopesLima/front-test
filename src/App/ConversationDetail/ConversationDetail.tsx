import React, { FC, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MessageBallon from '../MessageBalloon/MessageBalloon';
import * as MessagesAction from '../../shared/store/actions/MessagesAction';

import './ConversationDetail.scss';

const
  ConversationDetail: FC = ({
    messages,
    messagesLoading,
    messagesLoaded,
    messagesError,
    recordMessages
  }: any) => {
    // useEffect(() => {
    //   recordMessages();
    // }, [ recordMessages ]);

    return (
      <div className='conversation bg-primary'>
        {messagesLoading && (
          <div className="alert alert-info">Loading...</div>
        )}

        {messagesError && (
          <div className="alert alert-danger">{messagesError}</div>
        )}

        {messages.map(message => (
          <MessageBallon
            body={message.body}
            placement={message.mine ? 'right' : 'left'}
            key={message.id}
          />
        ))}
      </div>
    );
  },
  mapStateToProps = ({ messages }) => ({
    messages: messages.messages,
    messagesLoading: messages.loading,
    messagesLoaded: messages.loaded,
    messagesError: messages.error
  }),
  mapDispatchToProps = (dispatch: any) => bindActionCreators(MessagesAction, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationDetail));
