import { createSlice } from "@reduxjs/toolkit";



const homeslice = createSlice({
    name: 'home',
    initialState: { 
    homeData: null,
    },
    reducers: {
        setHomeData: (state, action) => {
            state.homeData = action.payload;
        }
    }
})
const {reducer, actions} = homeslice;
export const {setHomeData} = actions;
export default reducer;