const cuisineRecipesService = async(dispatch, setCuisine, apiKey, cuisine) => {
  
  const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${cuisine}&number=10`);
  const data = await api.json();
  dispatch(setCuisine(data.results));

}

export default cuisineRecipesService;