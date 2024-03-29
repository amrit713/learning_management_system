import "./globals.css";

import { ModalProvider } from "@/components/providers/modal-provider";
import type { Metadata } from "next";
import { Open_Sans, Inter } from "next/font/google";
import ToasterProvider from "@/components/providers/toasterProvider";

const font = Inter({
  subsets: ["latin"],
  // weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LMS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
