import {Component} from "~core/Component.js";
import {Form} from "~components/Form.js";
import {List} from "~components/List.js";
import { ListItem } from '~components/ListItem.js';
import {dateConvert} from "~utils/Date.js";

export class App extends Component {
  setup(props) {
    this.state.amount = 0;
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    // ...
    this.state['$title'] = this.createDOMTitle();
    this.renderTitle(this.$rootElement, this.state['$title']);
    const donateForm = new Form({
      onItemCreate: this.onItemCreate.bind(this),
    });
    this.state.form = donateForm;
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.state.list = donateList;
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
    const date = dateConvert(new Date());
    const data = {amount, date};
    this.state.list.addItem(data);
    this.state.amount += Number(amount);
    this.updateAmountTitle();
  }

  renderTitle($container, $title) {
    $container.appendChild($title);
  }

  createDOMTitle() {
    const $title = document.createElement("h1");
    $title.classList.add('total-amount');
    // по-другому хз как
    $title.innerHTML = `Итого: $<span>${this.state.amount}</span>`;
    return $title;
  }

  updateAmountTitle() {
    this.state['$title'].innerHTML = `Итого: $<span>${this.state.amount}</span>`;
  }
}
