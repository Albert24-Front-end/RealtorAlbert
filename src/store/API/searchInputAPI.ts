import axios from "axios";

const API_KEY = '7655c56f18msh8700d5eba63ab3cp1bb9e5jsn44ffb7ecf36a'; 

export const searchProperties = async (query: string) => {
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/auto-complete',
    params: { query, hitsPerPage: '10', page: '0', lang: 'en' },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Bayut API", error);
    throw error;
  }
};