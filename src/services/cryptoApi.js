import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '83333a6113msh4c0dce62df56291p1aa75djsn79ede4857c46'
}

const baseUrl =  'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
  url ,
  headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    })
  })
})

export const {
  useGetCryptosQuery
} = cryptoApi