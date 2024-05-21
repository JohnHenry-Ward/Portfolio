import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "JohnHenry Ward Portfolio",
  description: "Learn more about me!",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
