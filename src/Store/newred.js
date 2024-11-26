const defaultState = [];
 
const GET_PRODUCT = 'GET_PRODUCT';
 
export const productsItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return [...action.payload];
    default:
      return state;
  }
}
 
export const getProductAction = (payload) => ({ type: GET_PRODUCT, payload });