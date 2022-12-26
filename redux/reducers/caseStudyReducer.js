import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  caseStudyData: [],
};

export const GetCaseStudyData = createAsyncThunk(
  "GetCaseStudyData",
  async () => {
    const result = await getRequest(`${BASE_URL}/getCaseStudies`, "get");
    return result;
  }
);

const caseStudReducer = createSlice({
  name: "caseStudyData",
  initialState,
  reducers: {},
  extraReducers: {
    [GetCaseStudyData.fulfilled]: (state, action) => {
      const data = action.payload;
      state.caseStudyData = data;
      return state;
    },
  },
});

export default caseStudReducer.reducer;
