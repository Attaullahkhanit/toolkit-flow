import { createSlice } from "@reduxjs/toolkit";

const manageSlice = createSlice({
    name: 'manage',
    initialState: {
        manageData: null,
    },
    reducers: {
        setManageData: (state, action) => {
            state.manageData = action.payload;
        },
    },
});

export const { setManageData } = manageSlice.actions;
export default manageSlice.reducer;