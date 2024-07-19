import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';



export const metadata: Metadata = {
  title: "Tattoo Parlor",
  description: "Find your next tattoo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
        <body><MantineProvider>{children}</MantineProvider></body>
      
    </html>
  );
}
