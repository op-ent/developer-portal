"use client";

import React from "react";
import { ThemeProvider } from "@op-ent/unstyled-ui";
import { theme } from "~/lib/theme";

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}
