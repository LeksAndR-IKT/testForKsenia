import React from "react";
import { observer } from "mobx-react";

const ButtonControl = observer(({ model }) => {
  return (
    <div>
      {model.leftButtons.map((button, index) => (
        <button key={index} onClick={button.onClick}>
          {button.text}
        </button>
      ))}
      <input type="text" value={model.value} onChange={(e) => model.setValue(e.target.value)} />
      {model.rightButtons.map((button, index) => (
        <button key={index} onClick={button.onClick}>
          {button.text}
        </button>
      ))}
    </div>
  );
});

export default ButtonControl;