import React, { createContext } from "react";
// export const CharContext = createContext({ character: null });

const CharContext = createContext({
  name: "",
  level: 0,
  strength: 0,
  maxHealth: 0,
  currentHealth: 0,
  handleInputChange: () => {} // for name input when creating a character
});

export default CharContext;
