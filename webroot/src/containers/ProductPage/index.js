import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import ProductItem from '../../components/ProductItem';

class ProductPage extends React.Component {

  constructor(props) {
    super(props);  
    
    const data = JSON.parse(localStorage.getItem('product'));
    if(_.isEmpty(data)){
      localStorage.setItem('product', JSON.stringify(this.props.productDetail));
    }

    this.state = {
      detailProduct: JSON.parse(localStorage.getItem('product')),
    }
  }

  render() {
    const { detailProduct } = this.state;
    return (
      <div>
				<div className="collection-product-banner">
          <Link to="/">
            <span className="back-link">{`< Back to Category Page`}</span>
          </Link>
          <h2 className="title">Product Page</h2>
        </div>
        <div className="collection-product-jfy">
          {_.isEmpty(detailProduct) && <span>No Data</span>}
          {!_.isEmpty(detailProduct) && (
            <div className="card-jfy-row">
              <ProductItem 
                detailInfo={detailProduct}
                viewProduct={() => {}}
                classes="product-detail"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  productDetail: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const { categoryReducer } = state;
  return {
		productDetail: categoryReducer.get('productDetail'),
  };
}


export default connect(mapStateToProps)(ProductPage);