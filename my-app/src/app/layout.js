import Footer from "@/components/websites/Footer/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminLayout from "@/components/layouts/AdminLayouts/Adminlayouts";
import MainLayout from "@/components/layouts/MainLayouts/mainlayouts";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toprofile",
  description: "A REAL ESTATE WEBSITE",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
