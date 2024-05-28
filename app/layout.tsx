import type { Metadata } from "next";
import { Rampart_One, Rammetto_One } from "next/font/google";
import "./global.css";
import NavBar from "./components/NavBar";

const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400', variable: '--font-rampart' });
const rammetto_one = Rammetto_One({ subsets: ['latin'], weight: '400', variable: '--font-rammetto' });

export const metadata: Metadata = {
  title: "JohnHenry Ward Portfolio",
  description: "Learn more about me!",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${rampart_one.variable} ${rammetto_one.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
