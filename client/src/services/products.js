function All() {
  return fetch('/api/products')
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

function Recommended() {
  return fetch('/api/products/recommended')
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

 function User(id) {
  return fetch(`/api/products/user/${id}`)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

function Checkout(product) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  }
  const userId = this.state.user.id;
  const productId = product.product_id;
  fetch(`/api/cart/${userId}/update/${productId}`, options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
  .then(() => {
    this.deleteFromCart(product.id);
    this.fetchProducts();
    this.fetchRecommended();
  })
}

export default {
  All,
  Recommended,
  User,
  Checkout
}
