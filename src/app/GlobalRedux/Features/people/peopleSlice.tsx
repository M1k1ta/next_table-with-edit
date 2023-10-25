import { Person } from '@/types/Person';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PeopleAndPagination {
  people: Person[];
  next: string | null;
  previous: string | null;
};

interface PeopleState {
  people: Person[];
  loading: boolean;
  error: string;
  next: string | null;
  previous: string | null;
};

const initialState: PeopleState = {
  people: [],
  loading: true,
  error: '',
  next: null,
  previous: null,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<PeopleAndPagination>) => {
      state.people = action.payload.people;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default peopleSlice.reducer;
export const { actions } = peopleSlice;
