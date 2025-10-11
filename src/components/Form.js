import {Component} from "~core/Component.js";
import Input from "~components/UI/Input.js";

export class Form extends Component {
  constructor(props) {
    super(props);
  }

  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const inputNumber = new Input({
      labelText: "Введите сумму в $",
      type: "number",
    });
    this.$rootElement.appendChild(inputNumber.$rootElement);
    // ...
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
