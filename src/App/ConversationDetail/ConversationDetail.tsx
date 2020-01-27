import React, { FC, useEffect, createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

import MessageBallon from '../MessageBalloon/MessageBalloon';
import * as MessagesAction from '../../shared/store/actions/MessagesAction';
import MessageInput from '../MessageInput/MessageInput';

import './ConversationDetail.scss';

const
  ConversationDetail: FC = ({
    messages,
    messagesLoading,
    messagesLoaded,
    messagesError,
    recordMessages
  }: any) => {
    const
      scrollbarsRef = createRef<any>(),
      { conversationId } = useParams();

    useEffect(() => {
      recordMessages({ conversationId })
    }, [ conversationId ]);

    useEffect(() => {
      scrollbarsRef.current.scrollToBottom();
    }, [ messages ]);

    return (
      <>
        <div className='conversation full-page bg-primary d-flex align-items-end flex-column bd-highlight'>
          <div className='w-100'>
            <Scrollbars ref={scrollbarsRef} className='conversation-scrollbars'>
              {messages.map(({ body, isMine, id, authorName, creationDate }, index) => (
                <MessageBallon
                  authorName={authorName}
                  body={body}
                  placement={isMine ? 'right' : 'left'}
                  key={id}
                  creationDate={creationDate}
                  fromPrevious={messages[index - 1] && messages[index - 1].authorName === authorName}
                />
              ))}
            </Scrollbars>
          </div>

          {messagesLoading && (
            <div className='d-inline-block conversation-spinner'>
              <div className='spinner-border text-light' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          )}

          <div className='conversation-footer w-100 mt-auto'>
            <MessageInput />
          </div>
        </div>
      </>
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
