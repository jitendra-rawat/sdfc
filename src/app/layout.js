import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "900"], 
  variable: "--font-poppins",
});

export const metadata = {
  title: "SDFC Pipalkoti",
  description: "SDFC Pipalkoti is a dynamic football club dedicated to promoting local talent and fostering community spirit through sports.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
