import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      { name: 'hello', age: 19 },
      { name: 'bob', age: 35 },
      { name: 'tilly', age: 42 },
    ];
  }
}
