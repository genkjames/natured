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

function Checkout(product, id) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch(`/api/cart/${id}/update/${product.product_id}`, options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function Create(product) {
  const options = {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch('api/products', options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function Update(product) {
  console.log('updating');
  const options = {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch(`/api/products/${product.id}`, options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

function Delete(id) {
  return fetch(`/api/products/${id}`, {method: 'DELETE'})
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

export default {
  All,
  Recommended,
  User,
  Checkout,
  Create,
  Update,
  Delete
}
