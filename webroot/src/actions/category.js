import { category } from '../constants';
import { categoryService } from '../service';

export const action = {
  getCategoyProductLists,
  getDetailProduct,
}

function getCategoyProductLists(params) {
  return dispatch => {
    dispatch(request());
    categoryService.getCategoryProduct()
      .then(
        listData => dispatch(success(listData)),
        error => dispatch(failure(error))
      );
    };
    
    function request() { return { type: category.REQUEST_CATEGORY_PRODUCT } }
    function success(listData) { return { type: category.REQUEST_CATEGORY_PRODUCT_SUCCESS, listData } }
    function failure(error) { return { type: category.REQUEST_CATEGORY_PRODUCT_FAIL, error } }
}

function getDetailProduct(item) {
  return dispatch => {
    dispatch(getData(item));
  }
  function getData(item) { return { type : category.REQUEST_PRODUCT_DETAIL, item}}
}