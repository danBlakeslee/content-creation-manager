import { Inter } from "next/font/google";
import "../Assets/Styles/globals.css";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "@/components/AuthWrapper";
import MaintenanceWrapper from "@/components/MaintenanceWrapper";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Content Creation Manager",
  description: "Plan and Execute Your Content",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <MaintenanceWrapper>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </main>
            {/* <Footer /> */}
            <ToastContainer />
          </body>
        </html>
      </MaintenanceWrapper>
    </AuthWrapper>
  );
}
