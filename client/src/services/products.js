function getProducts() {
  return fetch('/api/products')
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

export {
  getProducts,
}
