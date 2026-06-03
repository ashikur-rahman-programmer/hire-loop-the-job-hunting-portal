import { FiSearch } from "react-icons/fi";
// import { IoLocationOutline } from "react-io"; // অথবা react-icons/io5 থেকে নিতে পারেন
import { IoLocationSharp } from "react-icons/io5";

export default function Banner() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center bg-[#060606] px-4 overflow-hidden text-white">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (ঐচ্ছিক - অ্যাম্বিয়েন্ট লাইটিং এর জন্য) */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="mx-auto flex container flex-col items-center text-center">
        {/* ১. টপ ক্যাপসুল ব্যাজ (50,000+ New Jobs) */}
        <div className="relative mb-8 flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121212]/60 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-400 backdrop-blur-md">
          {/* দুই পাশের সূক্ষ্ম গ্লোয়িং লাইন ইফেক্ট */}
          <div className="absolute left-[-20px] top-1/2 h-[1px] w-5 bg-gradient-to-r from-transparent to-white/20" />
          <div className="absolute right-[-20px] top-1/2 h-[1px] w-5 bg-gradient-to-l from-transparent to-white/20" />

          <span className="text-base">💼</span>
          <span className="font-mono font-bold text-zinc-200">50,000+</span>
          <span className="uppercase text-zinc-500 font-semibold tracking-widest text-[10px]">
            New Jobs This Month
          </span>
        </div>

        {/* ২. মেইন হেডিং */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white font-sans">
          Find Your Dream Job Today
        </h1>

        {/* ৩. সাব-ডেসক্রিপশন */}
        <p className="mx-auto mb-12 max-w-2xl text-base md:text-lg font-normal leading-relaxed text-zinc-400">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* ৪. প্রিমিয়াম মাল্টি-ইনপুট সার্চ বার */}
        <div className="w-full max-w-3xl rounded-2xl border border-white/[0.06] bg-[#111111]/80 p-2 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            {/* প্রথম ইনপুট: Job Title */}
            <div className="flex w-full items-center gap-3 px-3 py-2">
              <FiSearch className="h-5 w-5 flex-shrink-0 text-zinc-500" />
              <input
                type="text"
                placeholder="Job tilte, skill or company"
                className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none"
              />
            </div>

            {/* মাঝখানের ভার্টিকাল ডিভাইডার লাইন */}
            <div className="hidden h-8 w-[1px] bg-zinc-800 sm:block" />

            {/* দ্বিতীয় ইনপুট: Location */}
            <div className="flex w-full items-center gap-3 px-3 py-2">
              <IoLocationSharp className="h-5 w-5 flex-shrink-0 text-zinc-500" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none"
              />
            </div>

            {/* সার্চ বাটন */}
            <button className="flex h-11 w-full sm:w-12 items-center justify-center rounded-xl bg-[#4f46e5] text-white shadow-lg shadow-indigo-500/20 hover:bg-[#4338ca] transition-all flex-shrink-0">
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ৫. ট্রেন্ডিং পজিশন ট্যাগসমূহ */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="text-zinc-500 font-medium">Trending Position</span>

          <button className="rounded-full border border-white/[0.05] bg-zinc-900/40 px-3 py-1.5 text-zinc-300 hover:border-white/10 hover:bg-zinc-800/60 transition-all">
            Product Designer
          </button>

          <button className="rounded-full border border-white/[0.05] bg-zinc-900/40 px-3 py-1.5 text-zinc-300 hover:border-white/10 hover:bg-zinc-800/60 transition-all">
            AI Engineering
          </button>

          <button className="rounded-full border border-white/[0.05] bg-zinc-900/40 px-3 py-1.5 text-zinc-300 hover:border-white/10 hover:bg-zinc-800/60 transition-all">
            Dev-ops Engineer
          </button>
        </div>
      </div>
    </section>
  );
}
