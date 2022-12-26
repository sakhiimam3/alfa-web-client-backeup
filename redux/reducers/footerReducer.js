import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  footerData: [],
};

export const GetFooter = createAsyncThunk("GetFooter", async () => {
  const result = await getRequest(`${BASE_URL}/getFooter`, "get");
  return result;
});

const FooterReducer = createSlice({
  name: "GetFooter",
  initialState,
  reducers: {},
  extraReducers: {
    [GetFooter.fulfilled]: (state, action) => {
      const data = action.payload;
      state.footerData = data;
      return state;
    },
  },
});

export default FooterReducer.reducer;
