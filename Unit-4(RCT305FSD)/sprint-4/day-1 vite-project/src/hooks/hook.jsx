import { useState } from "react";

function useInputValues(initialValue) {
  let [value, setValue] = useState(initialValue);

  let handleChange = (e) => {
    setValue(e.target.value); // Update the value when the input changes
  };

  // Add a reset function to clear the input
  let reset = () => {
    setValue(""); // Reset the input value to an empty string
  };

  return {
    value,
    onChange: handleChange,
    reset, // Return the reset function
  };
}

export default useInputValues;
