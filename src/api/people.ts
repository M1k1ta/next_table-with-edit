import { NewPerson } from '@/types/NewPerson';
import { Person } from '@/types/Person';
import { client } from './client';

interface Data {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

const BASE_URL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const getPeople = () => {
  return client.get<Data>(`${BASE_URL}/table`);
};

export const getPeopleByUrl = (url: string) => {
  return client.get<Data>(url);
};

export const updatePeople = (id: number, data: NewPerson) => {
  return client.patch(`${BASE_URL}/table/${id}/`, data);
};
