import {Component} from "~core/Component.js";

/**
 * @typedef BtnSubmitProps
 * @property {string} text
 * @property {boolean} isActive
 */

/**
 * @typedef BtnSubmitState
 * @property {boolean} isActive
 */

/**
 * @extends Component
 */
export default class BtnSubmit extends Component {
  /**
   * @type BtnSubmitState
   */
  state;

  /**
   * @constructor
   * @param {BtnSubmitProps} props
   */
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
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

  removeDisabled() {
    this.$rootElement.removeAttribute('disabled');
  }

  setDisabled() {
    this.$rootElement.setAttribute('disabled', '');
  }
};
