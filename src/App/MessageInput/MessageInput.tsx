import React, { FC } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as MessagesAction from '../../shared/store/actions/MessagesAction';

import './MessageInput.scss';
import CustomInput from '../../shared/components/CustomInput/CustomInput';

const
  MessageInput: FC = ({
    createMessages
  }: any) => {
    const
      handleCustomInputSend = event => {
        const body = event.target.innerHTML.trim();

        if (body) {
          createMessages([
            {
              body,
              authorName: localStorage.getItem('@userName') || 'Convidado'
            }
          ]);
        }
      };

    return (
      <CustomInput
        placeholder='Digite uma mensagem'
        onSend={handleCustomInputSend}
      />
    );
  },
  mapStateToProps = () => ({}),
  mapDispatchToProps = (dispatch: any) => bindActionCreators(MessagesAction, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageInput));
