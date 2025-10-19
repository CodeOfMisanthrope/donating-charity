import {Component} from "~core/Component.js";
import {ListItem} from "~components/ListItem.js";

export class List extends Component {
  setup() {
    this.state.donations = [];

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $title = document.createElement('h2');
    $title.textContent = 'Список донатов';
    $title.classList.add('donates-container__title');
    this.$rootElement.appendChild($title);

    const $list = document.createElement('div');
    $list.classList.add("donates-container__donates");
    this.$rootElement.appendChild($list);
    this.state['$list'] = $list;
    console.log(this.state);
  }

  addItem(item) {
    // ...
    console.log("addItem", item);
    this.state.donations.push(item);
    this.clearDOMList();
    const domList = this.createDOMList();
    console.log(domList[0].$rootElement);
    this.renderList(domList);
  }

  renderList(list) {
    for (const item of list) {
      this.state['$list'].appendChild(item.$rootElement);
    }
  }

  clearDOMList(){
    this.state['$list'].replaceChildren();
  }

  createDOMList() {
    const domList = this.state.donations.map((item) => new ListItem(item));
    return domList;
  }
}
