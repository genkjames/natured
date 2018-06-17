import React, { Component } from 'react';
import Banner from '../Banner';
import Product from './Product';

class Products extends Component {
  componentDidMount() {
    this.props.errorStatus(false, false);
  }

  render() {
    let products;

    if (this.props.products && this.props.category) {
      products = this.props.products.filter(
        prod => prod.category_id === this.props.category.id)
      .map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            category={product.category}
          />
        )
      });
    } else if (this.props.viewAll && this.props.category) {
      products = this.props.viewAll.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            category={product.category}
          />
        )})

    }

    return (
      <div>
        {this.props.category && <Banner
          image={this.props.category.img_url || 'https://images.unsplash.com/photo-1485745352553-859d7a306fbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d57b648befb46f55dfd0fb04ae51d4e3&auto=format&fit=crop&w=1050&q=80'}
          text={this.props.match.params.activity}
          />
        }
        <div className="flex-container products">
          {products}
        </div>
      </div>
    )
  }
}

export default Products;
