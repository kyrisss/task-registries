import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PaginatorState {
  totalCount: number
  itemsPerPage: number,
  currentPage: number

}

const initialState: PaginatorState = {
  totalCount: 0,
  itemsPerPage: 10,
  currentPage: 1
}

export const paginatorSlice = createSlice({
  name: 'paginator',
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
export const {setTotalCount} = paginatorSlice.actions

export default paginatorSlice.reducer