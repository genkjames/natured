import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Categories from './Categories';
import Products from '../products/Products';
import ProductsView from '../products/ProductsView';

function Routes(props) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/categories"
          render={() => (
            <Categories
              categories={props.categories}
              errorStatus={props.errorStatus}
            />
          )}
        />
        <Route
          exact
          path="/categories/:activity"
          render={({ match }) => (
            <Products
              match={ match }
              category={props.category(match.params.activity)}
              products={props.products}
              view={props.view}
              errorStatus={props.errorStatus}
            />
          )}
        />
        <Route
          path="/categories/:activity/:id"
          render={({ match, history }) => (
            <ProductsView
              match={ match }
              onSubmit={props.handleSubmit}
              history={history}
              user={props.user}
            />
          )} />
      </Switch>
      <Route path="/all" render={({ match }) => (
        <Products
          match={ match }
          viewAll={props.products}
          category={props.categories}
          errorStatus={props.errorStatus}
        />)}
      />
    </div>
  )
}

export default Routes;
