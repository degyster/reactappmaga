import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { prodsReducer } from './prodsReducer'
import { shoppingCartReducer } from './shoppingCartReducer'
import { categoriesReducer } from './categoriesReducer'
import { productsItemReducer } from './newred'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: prodsReducer,
    shopping_cart: shoppingCartReducer,
    new: productsItemReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))