import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Ankit Maurya | Fullstack Web Developer",
  description:
    "Hey there, I'm Ankit Maurya, and my website is your gateway to the exciting world of web development. Explore my projects, share ideas, and let's embark on this digital adventure together.",
  openGraph: {
    images: ["/ankit.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[1340px] min-w-[360px] m-auto ">
        <Navbar />
        <ScrollToTop />
        <div className="overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
