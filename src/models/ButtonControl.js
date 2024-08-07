import { observable, action, computed } from "mobx";


class ButtonControl {
  @observable value = "";
  @observable leftButtons = [];
  @observable rightButtons = [];

  @action setValue(value) {
    this.value = value;
  }

  @action addLeftButton(text, onClick) {
    this.leftButtons.push({ text, onClick });
  }

  @action addRightButton(text, onClick) {
    this.rightButtons.push({ text, onClick });
  }

  @computed get buttonCount() {
    return this.leftButtons.length + this.rightButtons.length;
  }
}

export default ButtonControl;