import { observable, action, computed } from "mobx";

class AutocompleteControl {
  @observable value = "";
  @observable suggestions = [];
  @observable maxSuggestions = 3;

  @action setValue(value) {
    this.value = value;
  }

  @action setSuggestions(suggestions) {
    this.suggestions = suggestions;
  }

  @action setMaxSuggestions(maxSuggestions) {
    this.maxSuggestions = maxSuggestions;
  }

  @computed get displayedSuggestions() {
    return this.suggestions.slice(0, this.maxSuggestions);
  }
}

export default AutocompleteControl;