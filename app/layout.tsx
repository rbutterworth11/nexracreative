import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.${site.domain}`),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: `https://www.${site.domain}`,
    siteName: site.fullName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  alternates: { canonical: `https://www.${site.domain}` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
