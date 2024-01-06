import "../../styles/globals.css";
import Head from "next/head";
import {Space_Mono} from "next/font/google";

const myFont = Space_Mono({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Amrit Thapa",
  description: "let me introduce myself.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={myFont.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer type="text/javascript" src="script.js"></script>
      </Head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
