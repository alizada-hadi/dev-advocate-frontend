import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import advocatesService from "./advocatesService";

const initialState = {
  advocates: [],
  advocate: {},
  companies: [],
  status: "idle",
  error: null,
};

export const fetchAdvocates = createAsyncThunk(
  "advocates/fetched",
  async (query, thunkAPI) => {
    try {
      return await advocatesService.fetchAdvocates(query);
    } catch (error) {
      console.log(error);
    }
  }
);

export const advocateDetail = createAsyncThunk(
  "advocates/detail",
  async (username, thunkAPI) => {
    try {
      return await advocatesService.advocateDetail(username);
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchCompanies = createAsyncThunk(
  "advocates/compnies/fetched",
  async (hunkAPI) => {
    try {
      return await advocatesService.fetchCompanies();
    } catch (error) {
      console.log(error);
    }
  }
);

const advocatesSlice = createSlice({
  name: "advocates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvocates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdvocates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.advocates = action.payload;
      })
      .addCase(fetchAdvocates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(advocateDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(advocateDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.advocate = action.payload;
      })
      .addCase(advocateDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCompanies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default advocatesSlice.reducer;
