import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter' ,
    initialState : {count :0} ,
    reducers : {
        increment : (state)=> {
            state.count = state.count +1 
        } ,
        desIncrement : (state)=> {
            state.count = state.count - 1 
        } , 
        reset : (state ) => {
            state.count = 0 
        }
    }
})
export const  {increment , desIncrement, reset } = counterSlice.actions
export default counterSlice.reducer