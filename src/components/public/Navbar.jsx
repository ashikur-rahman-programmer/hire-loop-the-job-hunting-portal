"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { HiX } from "react-icons/hi";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { authClient } from "@/lib/auth-client"; // আপনার পাথ অনুযায়ী

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  return (
    <nav className="sticky top-3 left-0 right-0 z-50 mx-auto container px-4">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-white/[0.06] bg-[#121212]/80 px-6 shadow-2xl backdrop-blur-xl">
        {/* লোগো সেকশন */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Hireloop logo"
            width={120}
            height={120}
          />
        </div>

        {/* মাঝের নেভিগেশন লিঙ্কসমূহ */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/jobs"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* ডানপাশের অ্যাকশন বাটনসমূহ */}
        <div className="hidden items-center gap-5 md:flex">
          <div className="h-5 w-[1px] bg-zinc-800" />

          {!isPending &&
            (session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-white">
                  {session.user.name}
                </span>
                <Button
                  variant="flat"
                  className="text-sm h-9 bg-zinc-800 text-white"
                  onClick={async () => {
                    await authClient.signOut();
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-[#6366f1] transition-opacity hover:opacity-80"
                >
                  Sign In
                </Link>
                <Button
                  className="bg-gradient-to-r from-[#4f46e5] to-[#6366f1] font-medium text-white shadow-lg shadow-indigo-500/20 px-5 h-9 rounded-xl"
                  radius="none"
                >
                  Get Started
                </Button>
              </>
            ))}
        </div>

        {/* মোবাইল মেনু বাটন */}
        <button
          className="text-zinc-400 transition-colors hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <CiMenuFries className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isMenuOpen && (
        <div className="mt-2 rounded-2xl border border-white/[0.06] bg-[#121212]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/jobs"
                className="block w-full text-base font-medium text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="block w-full text-base font-medium text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block w-full text-base font-medium text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>

            <div className="my-2 h-[1px] w-full bg-zinc-800" />

            {!isPending &&
              (session ? (
                <li>
                  <Button
                    className="w-full bg-zinc-800 text-white"
                    onClick={async () => {
                      await authClient.signOut();
                      window.location.reload();
                    }}
                  >
                    Logout ({session.user.name})
                  </Button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href="/auth/signin"
                      className="block w-full text-base font-medium text-[#6366f1]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="pt-1">
                    <Button
                      className="w-full bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </li>
                </>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
