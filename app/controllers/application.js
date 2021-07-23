import Controller from '@ember/controller';
import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';

class Shared {
  constructor(data) {
    this.data = data;
  }

  @tracked data;

  filter = helper(([key, value]) => {
    return this.data.filter((data) => data[key] === value);
  });
}

export default class ApplicationController extends Controller {
 
  
  get shared() {
    debugger
    return new Shared(this.model);
  }
}
