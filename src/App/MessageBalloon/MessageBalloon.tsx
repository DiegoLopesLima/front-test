import React, { FC } from 'react';
import { format } from 'date-fns';

import { CNativeProps } from '../../shared/interfaces/CNativeProps.interface';
import { dynamicClassName } from '../../shared/helper';

import './MessageBalloon.scss';

export interface MessageBalloonProps extends CNativeProps {
  placement?: 'left'|'right';
  body: string;
  authorName: string;
  creationDate?: Date;
  fromPrevious?: boolean;
}

const
  MessageBalloon: FC<MessageBalloonProps> = ({
    placement = 'left',
    body,
    authorName,
    creationDate,
    fromPrevious = false
  }) => {
    return (
      <div
        {...dynamicClassName({
          'message-ballon d-flex': true,
          'justify-content-end': placement === 'right',
          'message-ballon-right': placement === 'right',
          'from-previous': fromPrevious
        })}
      >
        <div className='message-ballon-body'>
          {!fromPrevious && (
            <div>
              <a href=''>{authorName}</a>
            </div>
          )}

          <div>{body}</div>

          {creationDate && (
            <div className='d-flex justify-content-end mt-1 text-secondary'>
              <small>{format(creationDate, 'HH:mm')}</small>
            </div>
          )}
        </div>
      </div>
    )
  };

export default MessageBalloon;
