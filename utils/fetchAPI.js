import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '8f3702d186msh6e8114b417c26c8p14f6a5jsneaab6b3d43e4'
      }
    })


    return data;
}