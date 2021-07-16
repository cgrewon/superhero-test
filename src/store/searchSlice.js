import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    selHero: undefined,
    keyword: undefined,
    selHeroes: [],
    history: [],
  },
  reducers: {
    setResult: (state, action) => {
      state.results = [...action.payload];
    },
    initResult: (state) => {
      state.results = [];
    },

    setSelHero: (state, action) => {
      state.selHero = { ...action.payload };
    },

    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setSelHeroes: (state, action) => {
      state.selHeroes = [...action.payload];
    },
    addHistory: (state, action) => {
      if (state.history) {
        state.history.push(action.payload);
      } else {
        state.history = [action.payload];
      }
    },
    removeHistory: (state, action) => {
      state.history.splice(action.payload, 1);
    },
    initHistory: (state, action) => {
      state.history = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setResult,
  initResult,
  setSelHero,
  setKeyword,
  setSelHeroes,
  addHistory,
  removeHistory,
  initHistory,
} = searchSlice.actions;

export default searchSlice.reducer;
