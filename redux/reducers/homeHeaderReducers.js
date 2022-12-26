import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  HeaderSectionOneData: [],
  HeaderSectionTwoData: [],
};

export const GetHeaderSectionOne = createAsyncThunk(
  "GetHeaderSectionOne",
  async () => {
    const result = await getRequest(`${BASE_URL}/getHeaderSecOne`, "get");
    return result;
  }
);
export const GetHeaderSectionTwo = createAsyncThunk(
  "GetHeaderSectionTwo",
  async () => {
    const result = await getRequest(`${BASE_URL}/getHeaderSecTwo`, "get");
    return result;
  }
);

const headerSecOneReducer = createSlice({
  name: "headerSecOne",
  initialState,
  reducers: {},
  extraReducers: {
    [GetHeaderSectionOne.fulfilled]: (state, action) => {
      const data = action.payload;
      state.HeaderSectionOneData = data;
      return state;
    },
    [GetHeaderSectionTwo.fulfilled]: (state, action) => {
      const data = action.payload;
      state.HeaderSectionTwoData = data;
      return state;
    },
  },
});

export default headerSecOneReducer.reducer;
