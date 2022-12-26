import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  HomeServices: [],
};

export const GetHomeServices = createAsyncThunk("GetHomeServices", async () => {
  const result = await getRequest(`${BASE_URL}/getServices`, "get");
  return result;
});

const HomeServicesReducer = createSlice({
  name: "GetHomeServices",
  initialState,
  reducers: {},
  extraReducers: {
    [GetHomeServices.fulfilled]: (state, action) => {
      const data = action.payload;
      state.HomeServices = data;
      return state;
    },
  },
});

export default HomeServicesReducer.reducer;
