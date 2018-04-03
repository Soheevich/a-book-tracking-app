
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

export const search = (query) =>
  fetch(`${apiGoogle}?q=${query}`, {
    method: 'GET',
    // The maximum number of elements to return with this request (Max 40) (maxResults)
    maxResults: 40,
    // Restrict results to books or magazines (or both) (printType)
    type: 'books',
    // Order results by relevance or newest (orderBy)
    orderBy: 'relevance',
  }).then(res => res.json())
    .then(data => data.items)
