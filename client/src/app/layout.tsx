import type { Metadata } from "next";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';



export const metadata: Metadata = {
  title: "Tattoo Parlor",
  description: "Find your next tattoo!",
};

const theme = createTheme({
  /* Empty for now */
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider>
        <body>{children}</body>
      </MantineProvider>
    </html>
  );
}
