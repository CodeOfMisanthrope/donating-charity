import {Component} from "~core/Component.js";

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = this.textTemplate(props);
    // ...
  }

  textTemplate(item) {
    return `${item.date} - $${item.amount}`;
  }
}
