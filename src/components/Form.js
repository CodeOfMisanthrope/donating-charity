import {Component} from "~core/Component.js";
import Input from "~components/UI/Input.js";
import BtnSubmit from "~components/UI/BtnSubmit.js";

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
      name: "amount"
    });
    this.$rootElement.appendChild(inputNumber.$rootElement);

    const btnSubmit = new BtnSubmit({
      text: "Задонатить",
      isActive: false
    });
    this.$rootElement.appendChild(btnSubmit.$rootElement);
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
