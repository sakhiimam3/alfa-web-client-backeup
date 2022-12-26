import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  AboutHeader: [],
};

export const GetAboutHeaders = createAsyncThunk(
  "GetHeaderSectionOne",
  async () => {
    const result = await getRequest(`${BASE_URL}/getAboutHeaders`, "get");
    return result;
  }
);

const AboutHeaderReducer = createSlice({
  name: "GetAboutHeaders",
  initialState,
  reducers: {},
  extraReducers: {
    [GetAboutHeaders.fulfilled]: (state, action) => {
      const data = action.payload;
      state.AboutHeader = data;
      return state;
    },
  },
});

export default AboutHeaderReducer.reducer;
