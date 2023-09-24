import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {basketReducer} from './slices/basketSlice'
import {sumReducer} from './slices/sumSlice'
import {productsApi} from './queries/productApi'

const rootReducer = combineReducers({
  basket: basketReducer,
  sum: sumReducer,
  [productsApi.reducerPath]: productsApi.reducer
})

const persistedState = localStorage.getItem('basket')
  ? JSON.parse(localStorage.getItem('basket') ?? '')
  : {}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

store.subscribe(() => {
  localStorage.setItem('basket', JSON.stringify(store.getState()))
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch