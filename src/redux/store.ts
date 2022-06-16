import { configureStore } from '@reduxjs/toolkit';
import registrySlice from './registrySlice';
import paginatorSlice from './paginatorSlice';

export const store = configureStore({
    reducer: {
        registry: registrySlice,
        paginator: paginatorSlice,
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch