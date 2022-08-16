import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface weatherSearchState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: weatherSearchState = {
  loading: true,
  error: null,
  data: null,
};

export const searchWeather = createAsyncThunk(
  "weatherSearch/searchWeather",
  async (
    paramaters: {
      Authorization: string;
      format: string;
    },
    thunkAPI
  ) => {
    let url = `https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=${paramaters.Authorization}&format=${paramaters.format}`;
    const response = await axios.get(url);
    return {
      data: response.data,
    };
  }
);

export const weatherSearchSlice = createSlice({
  name: `weatherSearch`,
  initialState,
  reducers: {},
  extraReducers: {
    [searchWeather.pending.type](state) {
      state.loading = true;
    },
    [searchWeather.fulfilled.type](state, action) {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [searchWeather.rejected.type](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
