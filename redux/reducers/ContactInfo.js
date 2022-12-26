import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  contactInfo: [],
};

export const GetcontactInfo = createAsyncThunk("GetcontactInfo", async () => {
  const result = await getRequest(`${BASE_URL}/getContactInformation`, "get");
  return result;
});

const contactInfoReducer = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [GetcontactInfo.fulfilled]: (state, action) => {
      const data = action.payload;
      state.contactInfo = data;
      return state;
    },
  },
});

export default contactInfoReducer.reducer;
