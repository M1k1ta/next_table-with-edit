import React from 'react';
import './Button.scss';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children = '', type = 'button', disabled = false, onClick = () => {} }) => (
  <button
    className='custom-button'
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
