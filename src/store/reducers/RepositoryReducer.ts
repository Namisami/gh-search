import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface Licence {
  name: string
}

export interface Repository {
  id: number
  full_name: string
  stargazers_count: number
  forks_count: number
  language?: string
  topics: string[]
  license: Licence
  updated_at: string
}

export interface RepositoryInitialState {
  repositories: Repository[]
  currentRepository: Repository | null
  loading: boolean
  error: string | null
}

const initialState: RepositoryInitialState = {
  repositories: [],
  currentRepository: null,
  loading: false,
  error: "",
} satisfies RepositoryInitialState as RepositoryInitialState;

const API_URL = "https://api.github.com";
const SEARCH_API_URL = `${API_URL}/search`;
const SEARCH_REPO_API_URL = `${SEARCH_API_URL}/repositories`;

export const fetchRepositories = createAsyncThunk(
  "repository/fetchRepositories",
  async (q: string) => {
    const res = await axios.get(`${SEARCH_REPO_API_URL}?q=${q}`);
    return res.data;
  }
)

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    setCurrentRepository: (state, action: PayloadAction<Repository>) => {
      state.currentRepository = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload.items;
        state.loading = false;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.repositories = [];
        state.loading = false;
        state.error = action.error.message ? action.error.message : "Error!";
      });
  }
})

export default repositorySlice.reducer;

export const { setCurrentRepository } = repositorySlice.actions;

export const selectRepositories = (state: RootState) => state.repositories.repositories;
export const selectRepositoriesLoading = (state: RootState) => state.repositories.loading;
export const selectRepositoriesError = (state: RootState) => state.repositories.error;
export const selectCurrentRepository = (state: RootState) => state.repositories.currentRepository;
