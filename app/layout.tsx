import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuItems } from '../components/navigation-items';
import Navbar from '../components/navbar';
import { cn } from "@/lib/utils";
import Head from "next/head";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets:["latin"],weight:['100', '200', '300', '400', '500', '600']});

export const metadata: Metadata = {
  title: "Home - SOUNDFEEL",
  description: "Feel your heart...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
		<meta
			name="theme-color"
			media="(prefers-color-scheme: light)"
			content="white"
		/>
		<meta
			name="theme-color"
			media="(prefers-color-scheme: dark)"
			content="black"
		/>
	</Head>
      <body className={poppins.className}>
        <header className={cn('z-50  w-full')}>
        <div className="flex justify-center items-center px-2 sm:container">
          <Navbar/>
          </div>
        </header>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Footer/>
      </body>
    </html>
  );
}
