import {Component} from "~core/Component.js";
import Input from "~components/UI/Input.js";
import BtnSubmit from "~components/UI/BtnSubmit.js";
import {dateConvert} from "~utils/Date.js";

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
  // /**
  //  * @type FormState
  //  */
  // state;

  constructor(props) {
    super(props);
    // this.state = {};
    // const inputNumber = new Input({
    //   labelText: "Введите сумму в $",
    //   type: "number",
    //   name: "amount"
    // });
    // this.state.inputNumber = inputNumber;
    //
    // const btnSubmit = new BtnSubmit({
    //   text: "Задонатить",
    //   isActive: false
    // });
    // this.state.btnSubmit = btnSubmit;

    // this.state = {
    //   inputNumber: new Input({
    //     labelText: "Введите сумму в $",
    //     type: "number",
    //     name: "amount"
    //   }),
    //
    //   btnSubmit: new BtnSubmit({
    //     text: "Задонатить",
    //     isActive: false
    //   })
    // };
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
    console.log(this);
    console.log(this.state);
    $input.addEventListener('input', this.handleInput.bind(this));
    $btnSubmit.addEventListener('click', this.handleSubmit.bind(this));
  }

  handleInput(evt) {
    const val = evt.target.value;
    this.state.btnSubmit.state.isActive = val.length > 0;
    this.state.inputNumber.state.val = val;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const val = this.state.inputNumber.state.val;
    const date = dateConvert(new Date());
    const data = {val, date};
    console.log(this.state.donate)
    console.log(data);
    console.log('submit', evt.target);
  }
}
