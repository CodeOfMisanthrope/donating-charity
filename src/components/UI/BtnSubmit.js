import {Component} from "~core/Component.js";

/**
 * @typedef BtnSubmitProps
 * @property {string} text
 * @property {boolean} isActive
 */

/**
 * @typedef State
 * @property {boolean} isActive
 * @private
 */

/**
 * @extends Component
 */
export default class BtnSubmit extends Component {
  /**
   * @type State
   */
  state;

  /**
   * @constructor
   * @param {BtnSubmitProps} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Инициализирует компонент
   * @param {BtnSubmitProps} props
   */
  setup(props) {
    this.$rootElement = document.createElement("button");
    this.$rootElement.className = 'donate-form__submit-button';
    this.$rootElement.type = 'submit';
    this.$rootElement.textContent = props.text;
    if (!props.isActive) {
      this.$rootElement.setAttribute('disabled', '');
    }
  }
};
