import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {IProduct} from '../../../types/productsTypes'

// Define a service using a base URL and expected endpoints

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://appevent.ru/dev'}),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<IProduct>, void>({
      query: () => '/task1/catalog',
      transformResponse: (response: {items: Array<IProduct>}) => response.items
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsQuery} = productsApi