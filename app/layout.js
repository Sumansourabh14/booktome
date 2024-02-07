import TopAppBar from "@/components/pageComponents/TopAppBar";
import { GlobalContextProvider } from "@/services/globalContext";
import { DM_Serif_Text, Noto_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/pageComponents/Footer";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
  display: "swap",
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata = {
  title: "booktome",
  description: "Book website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body
          className={`${notoSerif.variable} ${dmSerifText.variable} font-notoSerif`}
        >
          <TopAppBar />
          {children}
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
