import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  persistedState
});

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

export default store;
