import {Component} from "~core/Component.js";
import {Form} from "~components/Form.js";
import {List} from "~components/List.js";
import { ListItem } from '~components/ListItem.js';

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    // ...
    
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
  }
}
