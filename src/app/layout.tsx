import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soller - Your power of the sun ",
  description: "High-efficiency solar panels for homes and businesses. Clean, renewable energy for a more sustainable future.",

  openGraph: {
    title: "Soller - Your power of the sun ",
    description: "High-efficiency solar panels for homes and businesses. Clean, renewable energy for a more sustainable future.",
    url: "https://test-buzzvel-soller.vercel.app/",
    type: "website",
    images: [{
      url: 'https://test-buzzvel-soller.vercel.app/sollerOG.png',
      width: 1200,
      height: 630,
      alt: "Soller - Your power of the sun ",
    },
    ],
    locale: "en_US",
    siteName: "Soller - Your power of the sun ",
  },
  twitter: { 
    card: "summary_large_image",
    title: "Soller - Your power of the sun ",
    description: "High-efficiency solar panels for homes and businesses. Clean, renewable energy for a more sustainable future.",
    images: [
      "https://test-buzzvel-soller.vercel.app/sollerOG.png",
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
