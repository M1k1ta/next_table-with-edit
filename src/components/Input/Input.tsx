import React from 'react';
import clsx from 'clsx';
import './Input.scss';

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({ type = 'text', name, placeholder = '', disabled = false, error = '', value, onChange }) => (
  <label className='custom-input'>
    <p className='custom-input__name'>{name}</p>
    <input
      className={clsx('custom-input__field', {
        'custom-input__field--error': error,
      })}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
    {error && <div className='custom-input__error'>{error}</div>}
  </label>
);
