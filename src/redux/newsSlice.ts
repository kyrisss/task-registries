import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewsState {
  totalCount: number
  itemsPerPage: 10,
  currentPage: number

}

const initialState: NewsState = {
  totalCount: 0,
  itemsPerPage: 10,
  currentPage: 1
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload
    }
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // fetching: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = registrySlice.actions
export const {setTotalCount} = newsSlice.actions

export default newsSlice.reducer