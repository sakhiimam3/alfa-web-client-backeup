import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  AboutTeam: [],
};

export const GetAboutTeam = createAsyncThunk("GetAboutTeam", async () => {
  const result = await getRequest(`${BASE_URL}/getTeamProfiles`, "get");
  return result;
});

const AboutTeamReducer = createSlice({
  name: "GetAboutTeam",
  initialState,
  reducers: {},
  extraReducers: {
    [GetAboutTeam.fulfilled]: (state, action) => {
      const data = action.payload;
      state.AboutTeam = data;
      return state;
    },
  },
});

export default AboutTeamReducer.reducer;
