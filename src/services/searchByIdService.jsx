import axios from "axios";

const searchById = async(dispatch, setSearchByIdState, apiKey, id) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    dispatch(setSearchByIdState(response.data));
  } catch(e) {
    console.error(e);
    return null;
  }
}

export default searchById;