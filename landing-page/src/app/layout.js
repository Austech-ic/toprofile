import Footer from "@/components/websites/Footer/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toprofile",
  description: "A REAL ESTATE WEBSITE",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Head>
        <link rel="icon" href="/brand/to.jpeg" />
        <link rel="icon" sizes="192x192" href="/brand/to.jpeg" />
        <link rel="icon" type="image/png" href="/brand/to.jpeg" />
        <link rel="icon" sizes="128x128" href="/brand/to.jpeg" />
      </Head>
        {children}
        <Footer />
        </body>
       
    </html>
  );
}
