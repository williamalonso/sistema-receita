import { configureStore, createSlice } from '@reduxjs/toolkit';

/* ===== Popular Recipes State ===== */

const initialPopular = {
  popularData: 0,
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

/* ===== Store Config ===== */

const store = configureStore({
  reducer: {
    popularRecipe: popularRecipeSlice.reducer,
  }
});

export default store;