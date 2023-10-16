import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Component/counterSlice";

export type RootState = {
    counterR: ReturnType<typeof counterSlice>;
}

export const store = configureStore({
    reducer : {counterR : counterSlice }
})

export default store;