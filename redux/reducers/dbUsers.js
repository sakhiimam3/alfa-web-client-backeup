import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
    GitUser: [],
};

export const GetGitUser = createAsyncThunk("GetGitUser", async () => {
    const result = await getRequest(`${BASE_URL}/users`, "get");
    return result;
});

const dbUserReducer = createSlice({
    name: "dbUser",
    initialState,
    reducers: {},
    extraReducers: {
      [GetGitUser.fulfilled]: (state, action) => {
        const data = action.payload;
        state.GitUser = data;
        return state;
      },
    },
  });
  
  export default dbUserReducer.reducer;