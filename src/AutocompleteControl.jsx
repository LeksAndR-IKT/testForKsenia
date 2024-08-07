import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import apiService from "../apiService";

const AutocompleteControl = observer(({ model }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = async (event) => {
    model.setValue(event.target.value);
    if (event.target.value.length > 0) {
      const suggestions = await apiService.getCountryByName(event.target.value);
      model.setSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      model.setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    model.setValue(suggestion.name);
    setShowSuggestions(false);
  };

  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", (event) => {
      const input = document.getElementById("autocomplete-input");
      if (!input.contains(event.target)) {
        setShowSuggestions(false);
      }
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div>
      <input
        id="autocomplete-input"
        type="text"
        value={model.value}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      {showSuggestions && (
        <ul>
          {model.displayedSuggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.name} - {suggestion.fullName} - {suggestion.flag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default AutocompleteControl