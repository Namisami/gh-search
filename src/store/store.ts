import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import repositoryReducer from "./reducers/RepositoryReducer";

export const store = configureStore({
  reducer: {
    repositories: repositoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
