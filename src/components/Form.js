import {Component} from "~core/Component.js";
import Input from "~components/UI/Input.js";
import BtnSubmit from "~components/UI/BtnSubmit.js";

/**
 * @typedef FormState
 * @property {Input} inputNumber
 * @property {BtnSubmit} btnSubmit
 */

/**
 * Класс компонента Формы
 * @extends Component
 */
export class Form extends Component {
  constructor(props) {
    super(props);
  }

  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    /**
     * @type FormState
     */
    this.state = {};

    const inputNumber = new Input({
      labelText: "Введите сумму в $",
      type: "number",
      name: "amount"
    });
    this.state.inputNumber = inputNumber;
    this.$rootElement.appendChild(inputNumber.$rootElement);

    const btnSubmit = new BtnSubmit({
      text: "Задонатить",
      isActive: false
    });
    this.state.btnSubmit = btnSubmit;
    this.$rootElement.appendChild(btnSubmit.$rootElement);
    console.log(this.state);
    this.initEvents(inputNumber.$rootElement, btnSubmit.$rootElement);
  }

  initEvents($input, $btnSubmit) {
    console.log(this);
    console.log(this.state);
    $input.addEventListener('input', this.handleInput.bind(this));
    $btnSubmit.addEventListener('click', this.handleSubmit.bind(this));
  }

  handleInput(evt) {
    const val = evt.target.value;
    this.state.btnSubmit.state.isActive = val.length > 0;
  }

  handleSubmit(evt) {
    console.log('submit', evt.target);
  }
}
