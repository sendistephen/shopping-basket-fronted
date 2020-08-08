export const createItem = (token, basketId, item) => {
  return fetch(`${process.env.REACT_APP_API_URL}/baskets/${basketId}/items`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${token}`,
    },
    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const deleteItem = (token, basketId, itemId) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/baskets/${basketId}/items/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': `${token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
