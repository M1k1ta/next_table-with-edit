import { configureStore  } from '@reduxjs/toolkit';
import peopleReducer from './Features/people/peopleSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
