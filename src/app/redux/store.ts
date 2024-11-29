import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/jobSlice";
import userSlice from "./features/userSlice";



export const store = configureStore({
    reducer: {
        user: userSlice,
        job: jobSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
