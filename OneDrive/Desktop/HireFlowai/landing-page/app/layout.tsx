import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HireFlow AI – Crack Interviews. Track Jobs. Improve with AI",
  description:
    "HireFlow AI is an AI-powered career platform to practice interviews, track job applications, and improve with intelligent feedback.",
  keywords: [
    "AI interview practice",
    "job tracker",
    "mock interviews",
    "career platform",
    "interview preparation",
  ],
  authors: [{ name: "HireFlow AI" }],
  creator: "HireFlow AI",
  metadataBase: new URL("https://hireflowai.in"),

  openGraph: {
    title: "HireFlow AI",
    description:
      "Practice interviews, track applications, and improve with AI.",
    url: "https://hireflowai.in",
    siteName: "HireFlow AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
