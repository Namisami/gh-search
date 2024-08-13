import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface Repository {
  id: number
  full_name: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  license: string
}

export interface RepositoryInitialState {
  repositories: Repository[]
  loading: boolean
  error: string | null
}

const initialState: RepositoryInitialState = {
  repositories: [],
  loading: false,
  error: "",
} satisfies RepositoryInitialState as RepositoryInitialState;

const API_URL = "https://api.github.com";
const SEARCH_API_URL = `${API_URL}/search`;
const SEARCH_REPO_API_URL = `${SEARCH_API_URL}/repositories`;

export const fetchRepositories = createAsyncThunk(
  "repository/fetchRepositories",
  async (q: string) => {
    try {
      const res = await axios.get(`${SEARCH_REPO_API_URL}?q=${q}`);
      return res.data;
    } catch (err) {
      if (err instanceof Error) return err.message;
      return "Unknown error. Try reload page.";
    }
  }
)

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload.items;
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(fetchRepositories.rejected, (state, action: PayloadAction<unknown, string>) => {
        state.error = typeof action.payload === 'string' ? action.payload : null;
        state.loading = false;
      });
  }
})

export default repositorySlice.reducer;

export const selectRepositories = (state: RootState) => state.repositories.repositories;
