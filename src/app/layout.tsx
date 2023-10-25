import React, { useState, createContext } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

// Create an initial value for the context
const initialAuthState = {
  isLoggedIn: false,
  setIsLoggedIn: () => {}, // You can provide a dummy function initially
};

// Create the AuthContext with an initial value
export const AuthContext = createContext(initialAuthState);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext.Provider value={initialAuthState}>
        <body className={inter.className}>
          <Sidebar>{children}</Sidebar>
        </body>
      </AuthContext.Provider>
    </html>
  );
}
