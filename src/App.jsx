import React from "react";
import { Provider } from "mobx-react";
import ButtonControl from "./ButtonControl";
import AutocompleteControl from "./AutocompleteControl";
import ButtonControlModel from "./models/ButtonControl";
import AutocompleteControlModel from "./models/AutocompleteControl";

function App() {
  const buttonControlModel1 = new ButtonControlModel();
  buttonControlModel1.addRightButton("Очистить", () => buttonControlModel1.setValue(""));
  buttonControlModel1.addRightButton("Hello world!", () => buttonControlModel1.setValue("Hello world!"));

  const buttonControlModel2 = new ButtonControlModel();
  buttonControlModel2.addRightButton("Показать alert", () => alert(buttonControlModel2.value));
  buttonControlModel2.addLeftButton("Проверить число", () => {
    const number = parseFloat(buttonControlModel2.value);
    if (!isNaN(number)) {
      alert(number);
    }
  });

  const autocompleteControlModel1 = new AutocompleteControlModel();
  autocompleteControlModel1.setMaxSuggestions(3);

  const autocompleteControlModel2 = new AutocompleteControlModel();
  autocompleteControlModel2.setMaxSuggestions(10);

  return (
    <Provider
    { ...buttonControlModel1}
      {...buttonControlModel2}
        {...autocompleteControlModel1}
       {... autocompleteControlModel2 } >
      <div className="App">
        <h1>Контрол с кнопками</h1>
        <ButtonControl model={buttonControlModel1} />
        <ButtonControl model={buttonControlModel2} />

        <h1>Контрол автокомплита</h1>
        <AutocompleteControl model={autocompleteControlModel1} />
        <AutocompleteControl model={autocompleteControlModel2} />
      </div>
    </Provider>
  );
}

export default App;
