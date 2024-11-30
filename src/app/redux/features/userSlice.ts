import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    email: '',

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name
        },
        clearUser: (state) => {
            state.email = '';
            state.name = '';
        }

    },
})


export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;