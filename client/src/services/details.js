function getCategories() {
  return fetch('/api/categories')
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

function getStates() {
  return fetch('/api/states')
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json()
  })
}

export {
  getCategories,
  getStates
}
