const popularRecipesService = async(dispatch, setPopular, apiKey) => {

  const check = localStorage.getItem('popularRecipes');

  if(check) {
    dispatch(setPopular(JSON.parse(check)));
  } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);
    const data = await api.json();
    localStorage.setItem('popularRecipes', JSON.stringify(data.recipes));
    dispatch(setPopular(data.recipes));
  }
}

export default popularRecipesService;