import React, { createContext } from "react";
// export const CharContext = createContext({ character: null });
//this thing is for testing line 6 is important, but the contents 
//are documentation of what might be in the context

const CharContext = createContext({
  name: "",
  level: 0,
  strength: 0,
  maxHealth: 0,
  currentHealth: 0,
  spriteImage: "",
  battleImage: "",
  location: "",
  handleSubmit: () => {} // for name input when creating a character
});

export default CharContext;
