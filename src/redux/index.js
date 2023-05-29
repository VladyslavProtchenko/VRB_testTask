import { configureStore } from '@reduxjs/toolkit'
import { swapApi } from './swapApi'
import demoReducer from './swapSlice'

export const store = configureStore({

    reducer: {
        currency: demoReducer,
        [swapApi.reducerPath]: swapApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(swapApi.middleware),
})