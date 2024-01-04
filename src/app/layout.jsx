import "../../styles/global.scss";
import Head from 'next/head';
export const metadata = {
  title: "Task Tracker",
  description: "App to track and organize your task at one place",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer type="text/javascript" src="script.js" ></script>
      </Head>
        <body suppressHydrationWarning={true}>
          {children}
        </body>
    </html>
  );
}
