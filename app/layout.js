import localFont from "next/font/local";
import "./globals.css";
import styles from "../components/Layouts/Layout.module.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Car Store",
    description: "A store for cars 🚗",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <div className={styles.container}>{children}</div>
        <Footer/>
        </body>
        </html>
    );
}
