import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/atoms/theme-provider";

const signika = Signika_Negative({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "adzin dzikir app",
  description:
    " aplikasi dzikir yang memandu penggunanya dalam berzikir pagi atau sore hari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={signika.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#7dd3fc"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #7dd3fc,0 0 5px #45c6c0"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
