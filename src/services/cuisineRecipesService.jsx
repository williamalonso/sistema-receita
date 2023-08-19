const cuisineRecipesService = async(dispatch, setCuisine, apiKey, cuisine) => {
  
  const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${cuisine}&number=8`);
  const data = await api.json();
  dispatch(setCuisine(data.results));

  // const check = localStorage.getItem('cuisineRecipes');

  // if(check) {
  //   dispatch(setCuisine(JSON.parse(check)));
  // } else {
  //   const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${cuisine}&number=8`);
  //   const data = await api.json();
  //   // console.log(data);
  //   localStorage.setItem('cuisineRecipes', JSON.stringify(data.results));
  //   dispatch(setCuisine(data.results));
  // }

}

export default cuisineRecipesService;