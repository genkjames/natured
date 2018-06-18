import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Categories from './components/categories/Routes';
import Info from './components/info/Routes';
import Auth from './components/auth/Routes';
import Cart from './components/cart/Cart';
import Sell from './components/profile/Sell';
import Footer from './components/Footer';
import ProductsServices from './services/products';
import CartServices from './services/cart';
import Details from './services/details';
import Services from './services/auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      userProducts: [],
      cart: [],
      states: [],
      total: 0,
      recommended: [],
      user: null,
      registerError: false,
      loginError: false,
      loggedInError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.changeErrorStatus = this.changeErrorStatus.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  // Fetch calls to api

  fetchProducts() {
    ProductsServices.All()
    .then(respBody => {
      this.setState({
        products: respBody.contents
     })
    });
  }

  fetchCategories() {
    Details.getCategories()
    .then(respBody => {
      this.setState({
        categories: respBody.contents
     })
    });
  }

  fetchStates() {
    Details.getStates()
    .then(respBody => {
      this.setState({
        states: respBody.contents
      })
    })
  }

  fetchCartItems() {
    CartServices.Items(this.state.user.id)
    .then(data => {
      this.setState({
        cart: data.contents
      })
    })
  }

  fetchOrderTotal() {
    CartServices.OrderTotal(this.state.user.id)
    .then(data => {
      let sum = data.contents[0].sum;
      if(sum === null) {
        sum = 0;
      }
      this.setState({
        total: sum
      })
    })
  }

  fetchRecommended() {
    ProductsServices.Recommended()
    .then(respBody => {
      this.setState({
        recommended: respBody.contents
     })
    });
  }

  fetchUserProducts() {
    ProductsServices.User(this.state.user.id)
    .then(respBody => {
      this.setState({
        userProducts: respBody.contents
      })
    })
  }

  // crud operations

  updateCart() {
    this.fetchCartItems();
    this.fetchOrderTotal();
  }

  addToCart(info) {
    CartServices.Add(info, this.state.user.id)
    .then(respBody => {
      this.updateCart();
    })
  }

  deleteFromCart(productId) {
    CartServices.Delete(this.state.user.id, productId)
    .then(respBody => {
      this.updateCart();
    })
  }

  editCart(info) {
    CartServices.Edit(info, this.state.user.id)
    .then(respBody => {
      this.updateCart();
    })
  }

  updateProductAfterCheckout(product) {
    ProductsServices.Checkout(product, this.state.user.id)
    .then(() => {
      this.deleteFromCart(product.id);
      this.fetchProducts();
      this.fetchRecommended();
    })
  }

  createProduct(product) {
    ProductsServices.Create(product)
    .then(respBody => {
      this.fetchProducts();
      this.fetchUserProducts();
    })
  }

  updateProduct(product) {
    ProductsServices.Update(product)
    .then(respBody => {
      this.fetchProducts();
      this.fetchUserProducts();
      this.props.history.push('/sell');
    })
  }

  deleteProduct(id) {
    ProductsServices.Delete(id)
    .then(() => {
      this.fetchProducts();
      this.fetchUserProducts();
    })
  }

  // handlers

  handleSubmit(info) {
    this.addToCart(info);
  }

  handleDelete(id) {
    this.deleteFromCart(id);
  }

  handleEdit(info) {
    this.editCart(info);
  }

  handleUpdate(info) {
    this.updateProductAfterCheckout(info);
  }

  selectCategory(category) {
    const index = this.state.categories.findIndex(aCategory => aCategory.category.toLocaleLowerCase() === category);
    return this.state.categories[index];
  }

  changeErrorStatus(registerError, loginError) {
    this.setState({
      registerError,
      loginError
    })
  }

  handleLogin(creds) {
    Services.login(creds)
    .then(user => {
      this.setState({
        user,
        loggedInError: false
      });
      this.changeErrorStatus(false, false);
      this.fetchUserProducts();
      this.updateCart();
      this.props.history.push('/categories');
    })
    .catch(err => this.setState({loginError: true}));
  }

  handleRegister(creds) {
    Services.register(creds)
    .then(user => {
      this.setState({
        user,
        loggedInError: false
      });
      this.changeErrorStatus(false, false);
      this.props.history.push('/categories');
    })
    .catch(err => this.setState({registerError: true}));
  }

  handleLogout() {
    Services.logout();
    this.setState({
      user: null
    })
    this.props.history.push('/categories');
  }

  isLoggedIn() {
    Services.checkToken()
    .then(user => {
      this.setState({user});
      this.fetchUserProducts();
      this.updateCart();
    })
    .catch(err => this.setState({loggedInError: true}));
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
    this.fetchRecommended();
    this.fetchStates();
    this.isLoggedIn();
  }

  render() {
    return (
    // each category image will be mapped through to create a individual flex items that link to all products
    // for that specific category
      <main>
        <div>
          <main>
            <Route exact path="/" render={() => (<Landing />)} />
            <Route path="/:id" render={() => (
              <Nav
                user={this.state.user}
                logout={this.handleLogout}
              />)}
            />
            <Categories
              categories={this.state.categories}
              errorStatus={this.changeErrorStatus}
              category={this.selectCategory}
              products={this.state.products}
              view={this.singleView}
              handleSubmit={this.handleSubmit}
              user={this.state.user}
            />
            <Info errorStatus={this.changeErrorStatus} />
            <Auth
              user={this.state.user}
              handleLogin={this.handleLogin}
              loginError={this.state.loginError}
              handleRegister={this.handleRegister}
              registerError={this.state.registerError}
            />
            <Route
              path="/cart"
              render={({ history }) => (
                <Cart
                  cartItems={this.state.cart}
                  total={this.state.total}
                  recommended={this.state.recommended}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
                  onUpdate={this.handleUpdate}
                  history={history}
                  user={this.props.user}
                  errorStatus={this.changeErrorStatus}
                />
              )}
            />
            <Route path="/sell" render={({ history }) => (
              <Sell
                userProducts={this.state.userProducts}
                states={this.state.states}
                categories={this.state.categories}
                user={this.state.user}
                isLoggedIn={this.isLoggedIn}
                onSubmit={this.createProduct}
                onDelete={this.deleteProduct}
                onEdit={this.updateProduct}
                history={history}
                error={this.state.loggedInError}
                errorStatus={this.changeErrorStatus}
              />)}
            />
            <Route path="/:id" render={() => (<Footer/>)} />
          </main>
        </div>
      </main>
    );
  }
}

export default App;
