export const getBaskets = (token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/baskets`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const basketDetails = (token, basketId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/baskets/${basketId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const createBasket = (token, basket) => {
  return fetch(`${process.env.REACT_APP_API_URL}/baskets/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${token}`,
    },
    body: JSON.stringify(basket),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
