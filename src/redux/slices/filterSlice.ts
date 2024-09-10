import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Sort = {
  name: string;
  sort: "rating" | "title" | "price";
};

export interface filterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;
  currentPage: number;
}

const initialState: filterSliceState = {
  searchValue: "",
  categoryId: 0,
  sort: { name: "популярности", sort: "rating" },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    changeCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    changeSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<filterSliceState>) => {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  changeSearchValue,
  changeCategory,
  changeSort,
  changeCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
