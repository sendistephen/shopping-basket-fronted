export const getItems = (token, basketId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/baskets/${basketId}/items`)
}