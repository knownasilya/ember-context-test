import Controller from '@ember/controller';
import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';

export const Item = hbs`<b>{{@item.name}}</b>`;

class Shared {
  constructor(data) {
    this.data = data;
  }

  Item = Item;
  @tracked data;

  filter = helper(([key, value]) => {
    return this.data.filter((data) => data[key] === value);
  });
}

export default class ApplicationController extends Controller {
  get shared() {
    return new Shared(this.model);
  }
}
