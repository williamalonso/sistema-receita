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

/* ===== Search Recipe State ===== */

const initialSearchRecipe = {
  initialSearchRecipe: '',
}

const searchRecipeSlice = createSlice({
  name: 'searchRecipe',
  initialState: initialSearchRecipe,
  reducers: {
    setSearchRecipe: (state, action) => {
      state.initialSearchRecipe = action.payload;
    }
  }
});

export const { setSearchRecipe } = searchRecipeSlice.actions;

/* ===== Active Btn State ===== */

const initialBtnRecipe = {
  initialBtnState: 'instrucoes',
}

const activeBtnRecipeSlice = createSlice({
  name: 'activeBtnRecipe',
  initialState: initialBtnRecipe,
  reducers: {
    setBtnState: (state, action) => {
      state.initialBtnState = action.payload;
    }
  }
});

export const { setBtnState } = activeBtnRecipeSlice.actions;

/* ===== Active Btn State ===== */

const initialSearchByIdRecipe = {
  searchById: '',
}

const searchByIdSlice = createSlice({
  name: 'searchByIdRecipe',
  initialState: initialSearchByIdRecipe,
  reducers: {
    setSearchByIdState: (state, action) => {
      state.searchById = action.payload;
    }
  }
});

export const { setSearchByIdState } = searchByIdSlice.actions;

/* ===== Store Config ===== */

const store = configureStore({
  reducer: {
    popularRecipe: popularRecipeSlice.reducer,
    dietRecipe: dietRecipeSlice.reducer,
    cuisineRecipe: cuisineRecipeSlice.reducer,
    searchWord: searchWordSlice.reducer,
    searchRecipe: searchRecipeSlice.reducer,
    activeBtnRecipe: activeBtnRecipeSlice.reducer,
    searchByIdRecipe: searchByIdSlice.reducer,
  }
});

export default store;