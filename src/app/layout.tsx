import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/Provider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { DarkModeBtn } from "@/components/DarkModeBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOL APP!",
  description: "LOL Champion APP!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeProvider>
          <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-20">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <div className="text-xl font-bold">
                <Link
                  href={"/"}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  홈
                </Link>
              </div>
              <nav className="flex gap-8">
                <Link
                  href={"/champions"}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  챔피언 목록
                </Link>
                <Link
                  href={"/items"}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  아이템 목록
                </Link>
                <Link
                  href={"/rotation"}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  챔피언 로테이션
                </Link>
                <DarkModeBtn />
              </nav>
            </div>
          </header>

          <main className="pt-20">
            <Providers>{children}</Providers>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
