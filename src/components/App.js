import {Component} from "~core/Component.js";
import {Form} from "~components/Form.js";
import {List} from "~components/List.js";
import { ListItem } from '~components/ListItem.js';
import {dateConvert} from "~utils/Date.js";

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    // ...
    
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
  }
}
