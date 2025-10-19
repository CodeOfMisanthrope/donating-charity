/**
 * Класс базовой логики компонента, от которого наследуется каждый компонент.
 */
export class Component {
  /**
   * @type HTMLElement
   */
  $rootElement;

  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.$rootElement = null;
    if (this.constructor === Component) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.setup(props);
  }

  setup() {
    throw new Error("Method 'setup' must be implemented by derived classes");
  }
}
