import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const API_URL = 'https://bayut.p.rapidapi.com/properties/list';
const API_KEY = '7655c56f18msh8700d5eba63ab3cp1bb9e5jsn44ffb7ecf36a'; // замените на ваш API-ключ

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

// export const fetchHouses = async () => {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: {
//         'X-RapidAPI-Key': API_KEY,
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//       },
//       params: {
//         locationExternalIDs: '5002,6020', // Пример параметра: ID локации
//         purpose: 'for-sale', 
//         hitsPerPage: '25',
//         page: '0',
//       },
//     });
//     return response.data.hits;
//   } catch (error) {
//     console.error('Ошибка при запросе к API:', error);
//     return [];
//   }
// };

// export const fetchHouses = async () => {
//     const apiKey = '7655c56f18msh8700d5eba63ab3cp1bb9e5jsn44ffb7ecf36a'; // Убедитесь, что вы добавили свой API ключ
//     const apiUrl = 'https://bayut.p.rapidapi.com/properties/list'; // Убедитесь, что это правильный URL
  
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': apiKey,
//           'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
  
//       const data = await response.json();
//       console.log('Fetched data:', data); // Логируем данные, чтобы увидеть, что приходит
//       return data.hits; // Проверьте, что данные приходят с нужной структурой
//     } catch (error) {
//       console.error('Error fetching houses:', error);
//       return [];
//     }
//   };