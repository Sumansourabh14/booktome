import TopAppBar from "@/components/pageComponents/TopAppBar";
import { GlobalContextProvider } from "@/services/globalContext";
import { DM_Serif_Text, Noto_Serif, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/pageComponents/Footer";

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
  display: "swap",
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
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
          className={`${notoSerif.variable} ${dmSerifText.variable} ${robotoSerif.variable} font-robotoText`}
        >
          <TopAppBar />
          {children}
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
