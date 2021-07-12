import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import store from "./store";

import routes from './routes';
import ProductListPage from "./pages/product-list/ProductListPage";
import ShoppingCartPage from "./pages/shopping-cart/ShoppingCartPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routes.SHOPPING_CART}>
            <ShoppingCartPage />
          </Route>
          <Route path="/">
            <ProductListPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
