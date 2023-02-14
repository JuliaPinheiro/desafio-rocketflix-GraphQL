import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const id = Math.floor(Math.random() * 1000) + 1;

function getMovies() {
  const url = `${BASE_URL}${id}?${API_KEY}&${language}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      movie.innerHTML = `
      <div>
        <img src="${data.poster_path ? IMG_URL + data.poster_path : 'https://images.unsplash.com/photo-1599837565318-67429bde7162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'}" />
      </div>
      `
    })
}

getMovies()