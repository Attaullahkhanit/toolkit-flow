import { createSlice } from "@reduxjs/toolkit";
import { dataArray } from "../../utils";

const allDataSlice = createSlice({
    name: 'users',
    initialState: dataArray,
    reducers: { 
        updateContent: (state, action) => {
            const {id, newContent} = action.payload;
            const itemIndex = state.findIndex(item => item.id === id);
            if(itemIndex !== -1) { 
                state[itemIndex].content = newContent;
            }
        },
        addData: (state, action) => {
            const newData = action.payload;
            state.push(newData);
        },
        deleteData: (state, action) => {
            const idToDelete = action.payload;
            const newState = state.filter(item => item.id !== idToDelete);
            return newState;
          }  
    }
})
export const { updateContent, addData, deleteData } = allDataSlice.actions;
export default allDataSlice.reducer;