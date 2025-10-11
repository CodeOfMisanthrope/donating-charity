import {Component} from "~core/Component.js";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    // ...
  }

  addItem(item) {
    // ...
  }
}
