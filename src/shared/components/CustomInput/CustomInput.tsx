import React, { FC, createRef } from 'react';

import './CustomInput.scss';

export interface CustomInputProps {
  onSend?: (event) => void,
  placeholder?: string
}

const
  CustomInput: FC<CustomInputProps> = ({
    onSend = () => {},
    placeholder = ''
  }) => {
    const
      inputRef = createRef<HTMLDivElement>(),
      handleInputKeyPress = event => {
        if (event.keyCode === 13) {
          event.preventDefault();

          if (!event.shiftKey) {
            onSend.call(event.target, event);

            event.target.innerHTML = '';
          }
        }
      };

    return (
      <div className='custom-input'>
        <div
          className='custom-input-input'
          contentEditable
          onKeyDown={handleInputKeyPress}
          ref={inputRef}
        ></div>

        {!!placeholder && (
          <span className='custom-input-placeholder'>{placeholder}</span>
        )}
      </div>
    )
  };

export default CustomInput;
