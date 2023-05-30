import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const APIKEY = '743e41e5c65d4bd1b7806aa7744a4cc7'

const baseUrl  = `https://newsapi.org/v2/`;

export const swapApi = createApi({
    reducerPath: 'swapApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

    endpoints: (builder) => ({
        getSwapData: builder.query({
            query: (resultCount) => `everything?q=bitcoin&pageSize=${resultCount}&apiKey=${APIKEY}`,
        }),

        getSwapDataTopic: builder.query({
            query: ( {topic , newsCount}) => `everything?q=${topic}&pageSize=${newsCount}&apiKey=${APIKEY}`,
            
        }),
    }),
})

export const { useGetSwapDataQuery, useGetSwapDataTopicQuery } = swapApi;