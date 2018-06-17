function Items(id) {
  return fetch(`/api/cart/${id}`)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function OrderTotal(id) {
  return fetch(`/api/cart/total/${id}`)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function Add(info, id) {
  const options = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch(`/api/cart/${id}`, options)
  .then(resp => {
    if(!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function Delete(id, productId) {
  return fetch(`/api/cart/${id}/${productId}`, {
    method: 'DELETE'
  })
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function Edit(info, id) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(info),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch(`/api/cart/${id}/${info.product_id}`,
    options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

export default {
  Items,
  OrderTotal,
  Add,
  Delete,
  Edit
}
