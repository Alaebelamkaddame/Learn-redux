import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import { selectedProductReducer } from "./productsReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;
