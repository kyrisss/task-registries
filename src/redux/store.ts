import { configureStore } from '@reduxjs/toolkit';
import registrySlice from './registrySlice';
import paginatorSlice from './paginatorSlice';
import newsSlice from './newsSlice';
import documentsSlice from './documentsSlice';
import profileSlice from './profileSlice';
import loginSlice from './loginSlice';

export const store = configureStore({
    reducer: {
        registry: registrySlice,
        paginator: paginatorSlice,
        news: newsSlice,
        documents: documentsSlice,
        profile: profileSlice,
        login: loginSlice,
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch