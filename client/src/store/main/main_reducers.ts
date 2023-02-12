/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction, combineReducers } from '@reduxjs/toolkit';
import { IProduct } from '../../types/interfaces';
import mainThunks from './main_thunks';

const { hitOfSalesList, recommendList, purchasesList } = mainThunks;

interface IProductState {
  hitOfSales: Array<IProduct | null>
  recommend: Array<IProduct | null>
  purchases: Array<IProduct | null>,
}

const initialState: IProductState = {
  hitOfSales: [],
  recommend: [],
  purchases: [],
};

const productReducers = createReducer(initialState, {
  [hitOfSalesList.fulfilled.type]: (state, action: PayloadAction<Array<IProduct | null>>) => {
    state.hitOfSales = action.payload;
  },
  [recommendList.fulfilled.type]: (state, action: PayloadAction<Array<IProduct | null>>) => {
    state.recommend = action.payload;
  },
  [purchasesList.fulfilled.type]: (state, action: PayloadAction<Array<IProduct | null>>) => {
    state.recommend = action.payload;
  },
});

const mainReducers = combineReducers({
  products: productReducers,
});

export default mainReducers;
