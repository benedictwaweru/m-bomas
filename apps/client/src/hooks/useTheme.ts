/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { createContext, useContext } from "react";

import { type ThemeProviderState } from "@/components/theme-provider";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
 
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
 
  return context;
}
