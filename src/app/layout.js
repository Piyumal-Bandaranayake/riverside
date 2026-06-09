import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "RiverSide Paradise Resort | Luxury Tropical Resort in Sri Lanka",
  description: "Escape to a peaceful riverside retreat in Kitulgala, Sri Lanka. Experience luxury villas, adventure activities, fine dining, and wellness spa along nature's riverbanks.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1F2937] font-sans antialiased selection:bg-[#F59E0B] selection:text-white">
        {children}
      </body>
    </html>
  );
}

