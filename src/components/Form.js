import {Component} from "~core/Component.js";
import Input from "~components/UI/Input.js";
import BtnSubmit from "~components/UI/BtnSubmit.js";

/**
 * @typedef Donate
 * @property {string} dollars
 * @property {string} dateTime
 */

/**
 * @typedef FormState
 * @property {Input} inputNumber
 * @property {BtnSubmit} btnSubmit
 * @property {Donate} donate
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

    const inputNumber = new Input({
      labelText: "Введите сумму в $",
      type: "number",
      name: "amount"
    });
    this.$rootElement.appendChild(inputNumber.$rootElement);
    this.state.inputNumber = inputNumber;

    const btnSubmit = new BtnSubmit({
      text: "Задонатить",
      isActive: false
    });
    this.$rootElement.appendChild(btnSubmit.$rootElement);
    this.state.btnSubmit = btnSubmit;

    this.state.donate = {
      dollars: '',
      dateTime: ''
    };

    this.initEvents(inputNumber.$rootElement, btnSubmit.$rootElement);
  }

  initEvents($input, $btnSubmit) {
    $input.addEventListener('input', this.handleInput.bind(this));
    $btnSubmit.addEventListener('click', this.handleSubmit.bind(this));
  }

  handleInput(evt) {
    const val = evt.target.value;
    if (val === "") {
      this.state.btnSubmit.setDisabled()
    } else {
      this.state.btnSubmit.removeDisabled()
    }
    this.state.inputNumber.state.val = val;
  }

  handleSubmit(event) {
    event.preventDefault();
    const val = this.state.inputNumber.state.val.trim();
    this.props.onItemCreate(val);
  }
}
