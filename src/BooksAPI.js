
const apiUdacity = "https://reactnd-books-api.udacity.com";
// const apiGoogle = "https://www.googleapis.com/books/v1/volumes";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getToken = () => {
  return token;
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
  }).then(res => res.json()).catch(err => console.log('update error', err))

export const search = (query) =>
  fetch(`${apiUdacity}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)

// I've made a function to search in Google Books
// But I cannot POST anything on the Udacity's server

// export const searchBook = (author, title) =>
//   fetch(`${apiGoogle}?q=${title ? title : ''}+inauthor:${author ? author : ''}&maxResults=20`, {
//     method: 'GET'
//   }).then(res => res.json())
//     .then(data => data)
