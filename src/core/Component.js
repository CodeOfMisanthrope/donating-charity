/**
 * Класс базовой логики компонента, от которого наследуется каждый компонент.
 */
export class Component {
  props;

  state;

  /**
   * @type HTMLElement
   */
  $rootElement;

  constructor(props = {}) {
    this.props = props;
    this.state = this.observeState({});
    this.$rootElement = null;
    if (this.constructor === Component) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.setup(props);
  }

  observeState(init) {
    return new Proxy(init, {
      set: (target, prop, val) => {
        console.log(target, prop, val);
        const oldVal = target[prop];
        if (oldVal !== val) {
          target[prop] = val;
          this.onStateChange(prop, val, oldVal);
        }
        return true;
      }
    });
  }

  /**
   * Вызывается при изменении state, переопределяется в дочерних классах
   * @param {string} property
   * @param {*} newVal
   * @param {*} oldVal
   */
  onStateChange(property, newVal, oldVal) {

  }

  setup() {
    throw new Error("Method 'setup' must be implemented by derived classes");
  }
}
