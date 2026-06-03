import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "hire loop The Modern Job Hunting Portal",
  description: `HireLoop is a full-featured job hunting portal that bridges the gap between job seekers and employers. It streamlines job discovery, application management, and company recruitment — all in one platform. It offers smart job search, company profiles, subscription-based premium features, and a recruiter toolkit, enhancing hiring speed and candidate experience. Designed for both individuals and organizations, HireLoop simplifies the talent acquisition process while ensuring a transparent, fast, and data-driven hiring experience.`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
