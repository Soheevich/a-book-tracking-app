
const apiUdacity = "https://reactnd-books-api.udacity.com";
const apiGoogle = "https://www.googleapis.com/books/v1/volumes";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${apiUdacity}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${apiUdacity}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${apiUdacity}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const searchInTitle = (query) =>
  fetch(`${apiGoogle}?q=intitle:${query}&maxResults=20`, {
    method: 'GET'
  }).then(res => res.json())
    .then(data => data.items)

export const searchInAuthor = (query) =>
  fetch(`${apiGoogle}?q=inauthor:${query}&maxResults=20`, {
    method: 'GET'
  }).then(res => res.json())
    .then(data => data.items)
