import React, { createContext, useState } from "react";
import { engineers } from "../assets/engineers-pics/engineers";

// create context
export const StoreContext = createContext();

function GlobalContext({ children }) {
  const [error, setError] = useState(false);

  // contextValue
  const contextValue = { error, setError, engineers };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
