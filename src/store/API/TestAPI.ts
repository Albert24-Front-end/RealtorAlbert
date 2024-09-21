import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '7655c56f18msh8700d5eba63ab3cp1bb9e5jsn44ffb7ecf36a'; 

export const realEstateApi = createApi({
    reducerPath: 'realEstateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bayut.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');
            headers.set('X-RapidAPI-Key', API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => ({
                url: '/properties/list',
                params: {
                    locationExternalIDs: '5002',
                    purpose: 'for-sale',
                    hitsPerPage: '24',
                    page: '0',
                    lang: 'en',
                },
            }),
        }),
    }),
});

export const { useGetPropertiesQuery } = realEstateApi;