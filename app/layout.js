import Footer from "@/components/pageComponents/Footer";
import TopAppBar from "@/components/pageComponents/TopAppBar";
import { GlobalContextProvider } from "@/services/globalContext";
import { DM_Serif_Text, Noto_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
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
          className={`${notoSerif.variable} ${dmSerifText.variable} ${sourceSerif.variable} font-sourceSerif`}
        >
          <TopAppBar />
          {children}
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
