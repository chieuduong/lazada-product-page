import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { action } from '../../actions';
import ProductItem from '../../components/ProductItem';

class CategoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
			items: {},
    }
  }

  componentWillMount() {
    this.props.getCategoyProductLists();
  }  
 
  getDetailProduct = (item) => {
    // clear old product
    localStorage.removeItem('product');

		this.props.getDetailProduct(item);
		this.props.history.push('/product');
  }
  
  render() {
    const { loading, categoyProductLists } = this.props;
    return (
      <div>
        <div className="collection-product-banner">
          <h2 className="title">Category Page</h2>
        </div>
        <div className="collection-product-jfy">
          {loading && <p>Loading...</p>}
          <div className="card-jfy-row">
          {!_.isEmpty(categoyProductLists) && (
            categoyProductLists.data.data.map((item) => (
              <ProductItem 
                detailInfo={item}
                key={item.itemId}
                viewProduct={() => this.getDetailProduct(item)}
              />
            ))
          )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categoryReducer } = state;
  return {
		loading: categoryReducer.get('loading'),
		categoyProductLists: categoryReducer.get('categoyProductLists'),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoyProductLists: () => dispatch(action.getCategoyProductLists()),
    getDetailProduct: (item) => dispatch(action.getDetailProduct(item)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);