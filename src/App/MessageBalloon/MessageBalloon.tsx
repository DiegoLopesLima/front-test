import React, { FC } from 'react';

import { CNativeProps } from '../../shared/interfaces/CNativeProps.interface';
import { dynamicClassName } from '../../shared/helper';

import './MessageBalloon.scss';

export interface MessageBalloonProps extends CNativeProps {
  placement?: 'left'|'right';
  body: string;
}

const
  MessageBalloon: FC<MessageBalloonProps> = ({ placement = 'left', body }) => {
    return (
      <div
        {...dynamicClassName({
          'message-ballon d-flex': true,
          'justify-content-end': placement === 'right',
          'message-ballon-right': placement === 'right'
        })}
      >
        <div className='message-ballon-body'>
          <div>
            <a href=''>Diego Lopes Lima</a>
          </div>

          <div>{body}</div>

          <div className='d-flex justify-content-end mt-1 text-secondary'>
            <small>08:09</small>
          </div>
        </div>
      </div>
    )
  };

export default MessageBalloon;
