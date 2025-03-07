"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/Images/logo.png";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";
// import destroySession from "@/app/actions/destroySession";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    // const { success, error } = await destroySession();
    // if (success) {
    //   setIsAuthenticated(false);
    //   router.push("/login");
    // }
    // {
    //   toast.error(error);
    // }
  };

  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="h-12 w-12"
                src={logo}
                alt="Bitesized Paranormal Logo"
                priority={true}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Planning
                </Link>
                <>
                  <Link
                    href="/content"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Content
                  </Link>
                  <Link
                    href="/hallmarks"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Hallmarks
                  </Link>
                  <Link
                    href="/cases"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Cases
                  </Link>
                  <Link
                    href="/analysis"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Analysis
                  </Link>
                </>
              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              <>
                <Link
                  href="/login"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FaSignInAlt className="inline mr-1" /> Login
                </Link>
              </>
              <>
                <button
                  onClick={handleLogout}
                  className="mx-3 text-gray-800 hover:text-gray-600"
                >
                  <FaSignOutAlt className="inline mr-1" /> Sign Out
                </button>
              </>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Planning
          </Link>
          <>
            <Link
              href="/links"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Content
            </Link>
            <Link
              href="/hallmarks"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Hallmarks
            </Link>
            <Link
              href="/cases"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Cases
            </Link>
            <Link
              href="/analysis"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Analysis
            </Link>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
