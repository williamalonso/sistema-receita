import { configureStore, createSlice } from '@reduxjs/toolkit';

/* ===== Popular Recipes State ===== */

const initialPopular = {
  popularData: '',
};

const popularRecipeSlice = createSlice({ // criando o slice
  name: 'popularRecipe', // nome do slice
  initialState: initialPopular, // estado inicial
  reducers: {
    setPopular: (state, action) => {
      state.popularData = action.payload;
    }
  }
});

export const { setPopular } = popularRecipeSlice.actions;

/* ===== Diet Recipes State ===== */

const initialDiet = {
  dietData: '',
}

const dietRecipeSlice = createSlice({
  name: 'dietRecipe',
  initialState: initialDiet,
  reducers: {
    setDiet: (state, action) => {
      state.dietData = action.payload;
    }
  }
});

export const { setDiet } = dietRecipeSlice.actions;

/* ===== Cuisine Recipes State ===== */

const initialCuisine = {
  cuisineData: '',
}

const cuisineRecipeSlice = createSlice({
  name: 'cuisineRecipe',
  initialState: initialCuisine,
  reducers: {
    setCuisine: (state, action) => {
      state.cuisineData = action.payload;
    }
  }
});

export const { setCuisine } = cuisineRecipeSlice.actions;

/* ===== Search Word State ===== */

const initialSearch = {
  input: '',
}

const searchWordSlice = createSlice({
  name: 'searchWord',
  initialState: initialSearch,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    }
  }
});

export const { setInput } = searchWordSlice.actions;

/* ===== Store Config ===== */

const store = configureStore({
  reducer: {
    popularRecipe: popularRecipeSlice.reducer,
    dietRecipe: dietRecipeSlice.reducer,
    cuisineRecipe: cuisineRecipeSlice.reducer,
    searchWord: searchWordSlice.reducer,
  }
});

export default store;