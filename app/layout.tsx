import type { Metadata } from "next";
import {Gabarito,Ephesis} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/_components/NavBar";

const gabarito = Gabarito({
    variable: "--font-gabarito",
    subsets: ["latin"]
})
const ephesis = Ephesis({
    variable: "--font-fancy",
    weight: "400",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "CR8V Studios | Innovative Marketing & Web Design Agency",
    description:
        "Elevate your brand with CR8V Studios. We deliver tailored digital marketing strategies, creative web design, and compelling branding solutions to drive growth and online success.",
    keywords: [
        "marketing agency",
        "digital marketing",
        "web design",
        "branding",
        "creative solutions",
        "page traffic",
    ],
    openGraph: {
        title: "CR8V Studios | Innovative Marketing & Web Design Agency",
        description:
            "Discover innovative marketing strategies and creative web design solutions at CR8V Studios to boost your brand's online presence and drive growth.",
        url: "https://www.cr8vstudios.com",
        siteName: "CR8V Studios",
        images: [
            {
                url: "https://www.cr8vstudios.com/og-image.jpg",
                width: 800,
                height: 600,
                alt: "CR8V Studios",
            },
        ],
        type: "website",
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${ephesis.variable} antialiased`}
      >
      <NavBar/>
        {children}
      </body>
    </html>
  );
}
