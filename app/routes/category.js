import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return fetch(`https://api.chucknorris.io/jokes/random?category=${params.category_id}`).then(response => response.json());
  },

  actions: {
    refresh() {
      this.refresh();
    }
  },
});
