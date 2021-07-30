import Controller from '@ember/controller';
import { helper } from '@ember/component/helper';
import { tracked, cached } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';

const Item = hbs`<b>{{@item.name}}</b> {{@item.age}}`;

class Shared {
  constructor(data) {
    this.data = data;
    this.Item = Item;
  }

  @tracked data;

  filter = helper(([key, value]) => {
    return this.data.filter((data) => (!value ? true : data[key] === value));
  });
}

export default class ApplicationController extends Controller {
  @cached
  get shared() {
    return new Shared(this.model);
  }
}
