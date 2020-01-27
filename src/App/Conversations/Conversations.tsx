import React, { FC, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import * as ConversationsAction from '../../shared/store/actions/ConversationsAction';
import { dynamicClassName } from '../../shared/helper';

import './Conversations.scss';

const
  Conversations: FC = ({
    conversations,
    conversationsLoading,
    conversationsLoaded,
    conversationsError,
    recordConversations
  }: any) => {
    useEffect(() => {
      recordConversations();
    }, []);

    return (
      <>
        { conversations.length > 0 ? (
          <div className='list-group'>
            { conversations.map(conversation => (
              <NavLink
                to={`/conversation/${conversation.id}`}
                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0'
                key={ conversation.id }
                activeClassName='list-group-item-active'
              >
                <div className='row'>
                  <div className='col-auto px-1'>
                    <img src={require('../../assets/images/apple-icon-60x60.png')} alt='' width='50' />
                  </div>

                  <div className='col pl-2 d-none d-lg-block'>
                    <div { ...dynamicClassName({ 'font-weight-bold': conversation.unreadMessages > 0 }) }>
                      { conversation.name }
                    </div>

                    <div>
                      <small
                        { ...dynamicClassName({
                          'font-weight-bold': conversation.unreadMessages > 0,
                          'd-inline-block': true
                        }) }
                        title={conversation.lastMessage}
                      >
                        { conversation.lastMessage }
                      </small>
                    </div>
                  </div>
                </div>

                { conversation.unreadMessages > 0 && (
                  <span className='badge badge-primary badge-pill'>{ conversation.unreadMessages }</span>
                ) }
              </NavLink>
            )) }
          </div>
        ) : (
          <div className='alert alert-info rounded-0'>Nenhuma conversa para listar.</div>
        ) }
      </>
    );
  },
  mapStateToProps = ({ conversations }) => ({
    conversations: conversations.conversations,
    conversationsLoading: conversations.loading,
    conversationsLoaded: conversations.loaded,
    conversationsError: conversations.error
  }),
  mapDispatchToProps = (dispatch: any) => bindActionCreators(ConversationsAction, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Conversations));
