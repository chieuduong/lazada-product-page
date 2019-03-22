import { fromJS } from 'immutable';
import { category } from '../constants';

export const initialState = fromJS({
  loading: false,
  nasaList: [],
  productDetail: {},
  errorLog: '',
});

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case category.REQUEST_CATEGORY_PRODUCT:
      return state.set('loading', true);
    case category.REQUEST_CATEGORY_PRODUCT_SUCCESS:
      return state.set('loading', false)
      .set('categoyProductLists', action.listData);
    case category.REQUEST_CATEGORY_PRODUCT_FAIL:
      return state.set('loading', false)
      .set('errorLog', action.error);
    case category.REQUEST_PRODUCT_DETAIL:
      return state.set('productDetail', action.item);
    default:
      return state;
  }
}
