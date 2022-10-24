import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import advocatesService from "./advocatesService";

const initialState = {
  advocates: [],
  status: "idle",
  error: null,
};

export const fetchAdvocates = createAsyncThunk(
  "advocates/fetched",
  async (thunkAPI) => {
    try {
      return await advocatesService.fetchAdvocates();
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
      });
  },
});

export default advocatesSlice.reducer;
