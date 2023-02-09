import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/interfaces";
import hitOfSalesList from "./main_thunk";

const initiaState: Array<IProduct | null> = [];

const mainReducers = createReducer(initiaState, {
    [hitOfSalesList.fulfilled.type]: (state, action: PayloadAction<Array<IProduct | null>>) => {
        state = action.payload;
    }
})

export default mainReducers;