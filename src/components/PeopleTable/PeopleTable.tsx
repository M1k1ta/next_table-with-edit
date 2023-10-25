'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './PeopleTable.scss';
import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks';
import { getPeople, updatePeople } from '@/api/people';
import { actions as peopleActions } from '@/app/GlobalRedux/Features/people/peopleSlice';
import { TableField } from '../TableField';
import { Person } from '@/types/Person';
import { Column } from '@/types/Column';
import { Loader } from '../Loader';
import { NewPerson } from '@/types/NewPerson';
import { reverseDateFormat } from '@/utils/reverseDateFormat';

export const PeopleTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { people, loading } = useAppSelector(state => state.people);

  const loadPeople = async () => {
    dispatch(peopleActions.setLoading(true));

    try {
      const { results, next, previous } = await getPeople();

      dispatch(peopleActions.set({ people: results, next, previous }));
    } catch {
      dispatch(peopleActions.setError('Custom error'))
    } finally {
      dispatch(peopleActions.setLoading(false));
    }
  }

  const handleUpdate = async (person: Person, column: Column, newValue: string) => {
    const { id, name, email, birthday_date, phone_number, address } = person;

    if (newValue === '') {
      return;
    }

    const newPerson: NewPerson = {
      name,
      email,
      birthday_date: reverseDateFormat(birthday_date),
      phone_number,
      address,
    };

    newPerson[column] = newValue;
    await updatePeople(id, newPerson);
    loadPeople();
  };

  useEffect(() => {
    loadPeople();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <table className='people-table'>
      <tbody>
        <tr className='people-table__header'>
          <th className='people-table__column'>Name</th>
          <th className='people-table__column'>Email</th>
          <th className='people-table__column'>Birthday</th>
          <th className='people-table__column'>Phone</th>
          <th className='people-table__column'>Address</th>
        </tr>

        {people.map((person) => {
          const {
            id,
            name,
            email,
            birthday_date,
            phone_number,
            address
          } = person;
          const colums = [
            name,
            email,
            birthday_date,
            phone_number,
            address
          ];
          const columsName: Column[] = [
            'name',
            'email',
            'birthday_date',
            'phone_number',
            'address'
          ];

          return (
            <tr
              className='people-table__row'
              key={id}
            >
              {colums.map((column, i) => {
                const field_id = `${id}-${i}`;
                const columnName = columsName[i];

                return (
                  <td
                    className='people-table__column'
                    key={field_id}
                  >
                    <TableField
                      type={(columnName === 'birthday_date') ? 'date' : 'text'}
                      field_id={field_id}
                      onUpdate={(newValue: string) => {
                        handleUpdate(person, columnName, newValue);
                      }}
                    >
                      {column}
                    </TableField>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}