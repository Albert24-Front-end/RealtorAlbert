import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCardbyIdResponse } from './types';


const API_KEY = '7655c56f18msh8700d5eba63ab3cp1bb9e5jsn44ffb7ecf36a'; 
const externalID = 4937770;
export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bayut.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');
            headers.set('X-RapidAPI-Key', API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCardbyId: builder.query<IGetCardbyIdResponse, string>({
            query: (card_id) => ({
                url: '/properties/detail',
                params: {
                    externalID: card_id, 
                },
            }),
        }),
    }),
});

export const { useGetCardbyIdQuery } = cardApi;