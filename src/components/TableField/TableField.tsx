'use client';
import { useState } from 'react';
import './TableField.scss';
import { reverseDateFormat } from '@/utils/reverseDateFormat';

interface Props {
  children: string;
  type?: 'text' | 'date';
  field_id: string;
  onUpdate: (value: string) => void;
}

export const TableField: React.FC<Props> = ({ children = '', type = 'text', field_id, onUpdate }) => {
  const [value, setValue] = useState((type === 'date') ? reverseDateFormat(children) : children);
  const [fieldId, setFieldId] = useState<string>('');

  return (
    <>
      {(fieldId !== field_id)
        ? (
          <span
            className='table-field'
            onDoubleClick={() => {setFieldId(field_id)}}
          >
            {children}
          </span>
          )
          : (
            <input
              className='table-field'
              type={type}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onBlur={() => {
                onUpdate(value);
                setFieldId('');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setFieldId('');
                }
        
                if (event.key === 'Enter') {
                  onUpdate(value);
                  setFieldId('');
                }
              }}
              autoFocus
            />
          )}
    </>
  );
}