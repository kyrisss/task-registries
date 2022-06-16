import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Profile {
    firstName: string,
    lastName: string,
    patronymic: string,
    country: string,
    city: string,
    phone: string,
    password: string,
}

const initialState: Profile = {
    firstName: "Захар",
    lastName: "Палазник",
    patronymic: "Геннадьевич",
    country: "BY",
    city: "Minsk",
    phone: "+375 22 111 33 44",
    password: 'Admin@123',

}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<Profile>) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.patronymic = action.payload.patronymic
            state.country = action.payload.country
            state.city = action.payload.city
            state.phone = action.payload.phone
            state.password = action.payload.password
          }
    },
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer