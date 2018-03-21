import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('https://api.chucknorris.io/jokes/categories').then(response => response.json());
  }
});
