import React, { createContext } from "react";
// export const CharContext = createContext({ character: null });

const CharContext = createContext({
  name: "",
  level: 0,
  strength: 0,
  maxHealth: 100,
  currentHealth: 100,
  spriteImage: "",
  handleSubmit: () => {} // for name input when creating a character
});

export default CharContext;
