import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["100","200","300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Chethan",
  description:
    "A showcase of Chethan's skills, projects, and experience as a developer. Explore featured work, technical expertise, and ways to connect.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body
        
          className={`${poppins.className} antialiased bg-white    dark:bg-slate-900 text-gray-700 dark:text-gray-200`}
        >
          <div className=" px-5 md:px-12 lg:px-18 xl:px-40">
            <div className="min-h-screen pt-32 md:pt-40">
              {children} <Toaster />
            </div>
          </div>

          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
