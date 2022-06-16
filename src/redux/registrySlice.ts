import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


export interface Registry {
  id: string,
  name: string,
  class: string,
  code: string,
  link: string,
  date: string
}

export interface RegistryState {
  registry: Registry[],
  totalCount: number
  isLoading: boolean,
  error: boolean,
  sortKey: 'id' | 'name',
  sortType: 'asc' | 'dsc',
  search: string,
}

const initialState: RegistryState = {
  registry: [],
  totalCount: 0,
  isLoading: true,
  error: false,
  sortKey: 'id',
  sortType: 'asc',
  search: "",

}

export const fetchRegistry = createAsyncThunk<Registry[]>(
  'registry/fetchRegistryStatus',
  async () => {
    const response = await axios.get("https://62a872e4943591102ba27181.mockapi.io/api/reestrs")
    return response.data
  }
)

export const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<'asc' | 'dsc'>) => {
      state.sortType = action.payload
    },
    setSortKey: (state, action: PayloadAction<'id' | 'name'>) => {
      state.sortKey = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegistry.fulfilled, (state, action) => {
      state.registry = action.payload
      state.totalCount = action.payload.length
      state.isLoading = false
      state.error = false
    })
    .addCase(fetchRegistry.pending, (state) => {
      state.isLoading = true
      state.error = false
    })
    .addCase(fetchRegistry.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = registrySlice.actions
export const { setSortType, setSortKey,setSearch } = registrySlice.actions

export default registrySlice.reducer