const dietRecipesService = async(dispatch, setDiet, apiKey) => {

  const check = localStorage.getItem('dietRecipes');

  if(check) {
    dispatch(setDiet(JSON.parse(check)));
  } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=vegetarian&number=8`);
    const data = await api.json();
    localStorage.setItem('dietRecipes', JSON.stringify(data.results));
    dispatch(setDiet(data.results));
  }

}

export default dietRecipesService;