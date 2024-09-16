// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const houseCardAPI = createApi({
//   reducerPath: 'houseCardAPI',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://bayut.p.rapidapi.com/',
//     prepareHeaders: (headers) => {
//       headers.set('X-RapidAPI-Key', 'your-rapidapi-key');
//       headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getProperties: builder.query({
//       query: () => 'properties/list?locationExternalIDs=5002&purpose=for-sale',
//     }),
//     getPropertyDetails: builder.query({
//       query: (id) => `properties/detail?externalID=${id}`,
//     }),
//   }),
// });

// export const { useGetPropertiesQuery, useGetPropertyDetailsQuery } = houseCardAPI;