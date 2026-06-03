import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-zinc-400 py-16 mt-10 px-6 border-t border-white/[0.03]">
      <div className="mx-auto container ">
        {/* উপরের মেইন গ্রিড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-16">
          {/* বামপাশের ব্র্যান্ড এবং ডেসক্রিপশন সেকশন */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Hireloop লোগো */}
            <Image
              src="/images/logo.png"
              alt="Hireloop logo"
              width={120}
              height={120}
            />

            {/* ডেসক্রিপশন */}
            <p className="text-sm leading-relaxed max-w-sm text-zinc-500 font-normal">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* ডানপাশের লিঙ্ক কলামসমূহ */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* কলাম ১: Product */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-wider text-[#4f46e5]">
                Product
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Job discovery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Worker AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Salary data
                  </Link>
                </li>
              </ul>
            </div>

            {/* কলাম ২: Navigations */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-wider text-[#4f46e5]">
                Navigations
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Career library
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* কলাম ৩: Resources */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold tracking-wider text-[#4f46e5]">
                Resources
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Brand Guideline
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* নিচের বটম বার (Socials & Copyright) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-900/80 pt-8 text-xs text-zinc-600">
          {/* সোশ্যাল মিডিয়া বাটনসমূহ */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900/60 text-zinc-500 hover:bg-zinc-800 hover:text-white transition-all"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            {/* Pinterest (Image এর মতো স্পেশাল পার্পল ব্যাকগ্রাউন্ড) */}
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4f46e5] text-zinc-200 hover:opacity-90 transition-all"
            >
              <FaPinterestP className="h-4 w-4" />
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900/60 text-zinc-500 hover:bg-zinc-800 hover:text-white transition-all"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>

          {/* কপিরাইট এবং পলিসি লিঙ্ক */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
            <span>Copyright 2024 —Programming Hero</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-zinc-400 transition-colors">
                Terms & Policy
              </Link>
              <span>-</span>
              <Link href="#" className="hover:text-zinc-400 transition-colors">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
