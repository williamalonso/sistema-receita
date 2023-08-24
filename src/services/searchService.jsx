import axios from "axios";

const searchService = async(dispatch, setSearchRecipe, apiKey, search) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${search}&number=10`);
    dispatch(setSearchRecipe(response.data.results));
  } catch(e) {
    console.error(e);
    return null;
  }
}

export default searchService;