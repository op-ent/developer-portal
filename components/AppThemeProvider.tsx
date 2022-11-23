"use client";

import React from "react";
import { ConfigProvider } from "@op-ent/unstyled-ui";
import { config } from "~/lib/config";

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider config={config}>{children}</ConfigProvider>;
}
