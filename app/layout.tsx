import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ModalProvider, ThemeProvider } from "@/lib/store";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Credentials That Matter",
  description:
    "Next-Gen Expertise For Your Enterprise. Cultivate high-performance teams through expert-led, tailored corporate training and accredited executive education programs.",
  keywords: [
    "Corporate Training",
    "Upskilling",
    "Enterprise Learning",
    "Executive Education",
    "Accredian",
    "Credentials that matter",
  ],
  authors: [{ name: "Accredian Enterprise" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F7F8FB] dark:bg-[#0B0F19] dark:dark-grid-pattern transition-colors duration-500">
        <ThemeProvider>
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
