import {Component} from "~core/Component.js";
import Input from "~components/UI/Input.js";
import BtnSubmit from "~components/UI/BtnSubmit.js";

/**
 * @typedef FormState
 * @property {string} valAmount
 */

/**
 * Класс компонента Формы
 * @extends Component
 */
export class Form extends Component {
  /**
   * @type FormState
   */
  state;

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

    this.initEvents(inputNumber.$rootElement, btnSubmit.$rootElement);
  }

  initEvents($input, $btnSubmit) {
    $input.addEventListener('input', this.handleInput.bind(this));
    $btnSubmit.addEventListener('click', this.handleSubmit.bind(this));
  }

  handleInput(evt) {
    const val = evt.target.value;
    console.log('input', val);
    if (val.length > 0) {

    } else {

    }
  }

  handleSubmit(evt) {
    console.log('submit', evt.target);
  }
}
