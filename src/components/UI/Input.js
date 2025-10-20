import {Component} from "~core/Component.js";

/**
 * @typedef InputState
 * @property {string} val
 */

/**
 * @typedef InputProps
 * @property {string} labelText
 * @property {string} type
 * @property {string} name
 */

/**
 * Класс UI-компонента Input
 * @extends Component
 */
export default class Input extends Component {
  /**
   * @type InputState
   */
  state;

  /**
   * @constructor
   * @param {InputProps} props
   */
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
  }

  /**
   * Инициализирует компонент
   * @param {InputProps} props
   */
  setup(props) {
    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.textContent = props.labelText;
    this.$rootElement = $label;
    const $input = document.createElement('input');
    $input.className = 'donate-form__donate-input';
    $input.type = props.type;
    $input.name = props.name;
    $input.max = "100";
    $input.min = "1";
    $input.setAttribute('required', '');
    $label.appendChild($input);
  }
};
