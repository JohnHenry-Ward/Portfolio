import type { Metadata } from "next";
import { Rampart_One, Rammetto_One, Roboto } from "next/font/google";
import "./global.css";
import NavBar from "./components/NavBar";

const rampart_one = Rampart_One({ subsets: ['latin'], weight: ['400'], variable: '--font-rampart' });
const rammetto_one = Rammetto_One({ subsets: ['latin'], weight: ['400'], variable: '--font-rammetto' });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: "JohnHenry Ward Portfolio",
  description: "Learn more about me!",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${rampart_one.variable} ${rammetto_one.variable} ${roboto.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
