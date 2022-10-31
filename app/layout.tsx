import "@op-ent/unstyled-ui-theme/dist/colors.css";
import { Space_Grotesk } from "@next/font/google";
import clsx from "clsx";
import "~/styles/globals.css";
import AppThemeProvider from "~/components/AppThemeProvider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "dark antialiased bg-neutral-1 text-neutral-12",
        spaceGrotesk.className
      )}
    >
      <head>
        <title>op-ent developer portal</title>
        <meta name="description" content="op-ent developer portal" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
