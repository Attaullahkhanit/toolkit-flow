import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeslice";
import manageReducer from "./slices/homeslice";
import allDataReducer from './slices/allData'

export const store = configureStore({
    reducer: {
        homereducerdata: homeReducer,
        managereducerdata: manageReducer,
        allDataArray: allDataReducer,
    },
});