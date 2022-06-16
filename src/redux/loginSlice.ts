import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginStatus {
    login: boolean
}

const initialState: LoginStatus = {
    login: true
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.login = action.payload
        }
    },
})

export const { setLogin } = loginSlice.actions

export default loginSlice.reducer