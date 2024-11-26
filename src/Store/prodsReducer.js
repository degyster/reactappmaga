const defaultState = {
  categories_name: '',
  products: []
}


const GET_PRODUCTS = 'GET_PRODUCTS'
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_PRODUCTS_SALE = 'ALL_PRODUCTS_SALE'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const ADD_PRODUCTS = 'ADD_PRODUCTS'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'



export const prodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {categories_name: 'All products', products: action.payload.map(elem => {
        elem.isShowSale = true
        elem.isShowPrice = true
        return elem
    })}
    case ALL_PRODUCTS_SALE:
      return {categories_name: 'Discounted products', products: action.payload.map(elem => {
        elem.isShowSale = true
        elem.isShowPrice = true
        return elem
    })}
    case PRODUCTS_BY_CATEGORY:
      return {categories_name: action.payload.category.title, products: action.payload.data.map(elem => {
        elem.isShowSale = true
        elem.isShowPrice = true
        return elem
    })}
    case GET_PRODUCTS:
      return [...action.payload]
    
  //   case ADD_PRODUCTS:
  //       let changed_products_by_fetch = action.payload.map(elem => {
  //           elem.isShowSale = true
  //           elem.isShowPrice = true
  //           return elem
  //       })
  //       return {products: changed_products_by_fetch}

    case FILTER_BY_SALE:
        let {checked, typeSale} = action.payload
        let changed_products_by_sale = state.products.map(elem => {
            elem.isShowSale = (!checked) ? true : Boolean(elem.discont_price)
            return elem
        })
        return {categories_name:typeSale, products: changed_products_by_sale}

    case FILTER_BY_PRICE:
        let {max, min, type} = action.payload
        let changed_products_by_price = state.products.map(elem => {
            elem.isShowPrice = true
            if (!(elem.price >= min && elem.price <= max)){
                elem.isShowPrice = false
            }
            return elem
        })
        return {categories_name: type, products: changed_products_by_price}
    
      default:
      return state
  }
}
export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const allProductsSaleAction = (payload) => ({ type: ALL_PRODUCTS_SALE, payload });
export const productsByCategoryAction = (payload) => ({ type: PRODUCTS_BY_CATEGORY, payload });
export const addProductsAction = (payload) => ({type: ADD_PRODUCTS, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type: FILTER_BY_PRICE, payload})
// export const getProductAction = (payload) => ({ type: GET_PRODUCTS, payload });