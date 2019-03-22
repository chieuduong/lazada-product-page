import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import './index.css';

class AppProcess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet titleTemplate="%s - Lazada site" defaultTitle="Lazada site">
          <meta name="description" content="A React.js application" />
        </Helmet>
        <div className="content-wrapper">
          <Router history={history}>
            <div className="collection-product">
              <Route exact path="/" component={CategoryPage} />
              <Route path="/product" component={ProductPage} />
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

const connectedApp = connect()(AppProcess);
export { connectedApp as AppProcess }; 