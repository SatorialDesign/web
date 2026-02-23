import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sartorial Design | Taiba Khan — Interior Design",
  description:
    "Globally inspired interior design by Taiba Khan. Dark, moody, mid-century modern spaces woven with natural materials and cultural memory. Based in Lisbon, Portugal.",
  keywords: [
    "interior design",
    "Lisbon",
    "global design",
    "Taiba Khan",
    "Sartorial Design",
    "mid-century modern",
    "moody interiors",
  ],
  openGraph: {
    title: "Sartorial Design | Taiba Khan",
    description:
      "Globally inspired interior design. Dark, moody spaces woven with natural materials and cultural memory.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal antialiased font-body">
        {children}
      </body>
    </html>
  );
}
