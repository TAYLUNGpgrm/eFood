import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api' // Vamos criar esse no próximo passo

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
