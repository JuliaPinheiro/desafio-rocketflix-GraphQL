import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { BASE_URL } from './api.js';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

function getMovies() {
  console.log('getMovies');
  const id = Math.floor(Math.random() * 1000) + 1;

  client
    .query({
      query: gql`
      query GetMovie {
        movie(id: ${id}) {
          id
          title
          overview
          poster_path
        }
      }
    `,
    })
    .then((result) => {
      const data = result.data.movie;
      movie.innerHTML = `
      <div class="movie-info">
        <img src="${
          data.poster_path
            ? IMG_URL + data.poster_path
            : 'https://images.unsplash.com/photo-1599837565318-67429bde7162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
        }" />

        <div class="title-overview">
        <h2>${
          data.title
            ? data.title
            : '<p>Ops, hoje não é dia de assistir filme. </br>Bora codar! 🚀</p>'
        }</h2>

        <p>${data.overview ? data.overview : 'Não tem sinopse disponível.'}</p>
      </div>

      </div>
    `;
    });
}

function init() {
  const buttonMovie = document.getElementById('buttonMovie');
  console.log(buttonMovie);

  buttonMovie.addEventListener('click', getMovies);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
