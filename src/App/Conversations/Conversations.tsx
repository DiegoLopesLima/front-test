import React, { FC } from 'react';

import { CNativeProps } from '../../shared/interfaces/CNativeProps.interface';
import { dynamicClassName } from '../../shared/helper';
import { Conversation } from '../../shared/interfaces/Conversation';

import './Conversations.scss';

export interface ConversationsProps extends CNativeProps {
  conversations: Conversation[]
}

const
  Conversations: FC<ConversationsProps> = ({ conversations = [] }) => {
    return (
      <>
        {conversations.length > 0 ? (
          <div className='list-group'>
            { conversations.map(conversation => (
              <a
                href=''
                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0'
                key={conversation.id}
              >
                <div className="w-100">
                  <div {...dynamicClassName({ 'font-weight-bold': conversation.unreadMessages > 0 })}>
                    { conversation.name }
                  </div>

                  <small
                    {...dynamicClassName({
                      'font-weight-bold': conversation.unreadMessages > 0,
                      'd-inline-block text-truncate w-100': true
                    })}
                    title={conversation.lastMessage}
                  >
                    { conversation.lastMessage }
                  </small>
                </div>

                {conversation.unreadMessages > 0 && (
                  <span className='badge badge-primary badge-pill'>{ conversation.unreadMessages }</span>
                )}
              </a>
            )) }
          </div>
        ) : (
          <div className='alert alert-info rounded-0'>Nenhuma conversa para listar.</div>
        )}
      </>
    )
  };

export default Conversations;
