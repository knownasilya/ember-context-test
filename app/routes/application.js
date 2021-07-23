import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [{ name: 'hello' }, { name: 'bob' }, { name: 'tilly' }];
  }
}
