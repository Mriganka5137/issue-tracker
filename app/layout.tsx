import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import AuthProvider from "./auth/AuthProvider";
import QueryClientProvider from "./QueryClientProvider";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Issue Tracker App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(cn(inter.variable, poppins.variable), "bg-secondary")}>
        <QueryClientProvider>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              <div className="border-b bg-secondary ">
                <NavBar />
              </div>
              <main
                className={
                  (cn(inter.variable, poppins.variable),
                  "p-5 mx-auto max-w-[1440px]  min-h-screen bg-secondary/90")
                }
              >
                {children}
              </main>
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
