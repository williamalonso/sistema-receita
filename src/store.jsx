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

/* ===== Store Config ===== */

const store = configureStore({
  reducer: {
    popularRecipe: popularRecipeSlice.reducer,
    dietRecipe: dietRecipeSlice.reducer,
  }
});

export default store;