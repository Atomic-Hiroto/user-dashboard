import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "../styles/scss/custom.scss";
import Providers from "@/store/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "User Dashboard",
    description: "Dashboard with followers",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
