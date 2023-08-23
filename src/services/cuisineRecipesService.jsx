import axios from 'axios';

const cuisineRecipesService = async(dispatch, setCuisine, apiKey, cuisine) => {
  
  // const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${cuisine}&number=10`);
  // const data = await api.json();
  // dispatch(setCuisine(data.results));

  try {
    const response = await axios.get(`http://localhost:3001/cuisine/${cuisine}`);
    dispatch(setCuisine(response.data.dishes));
    // console.log(response.data.dishes);
  } catch(e) {
    console.error('Erro ', e);
    return null;
  }

}

export default cuisineRecipesService;