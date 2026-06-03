import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full text-white pt-32 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* ================= ১. ব্যাকগ্রাউন্ড CTA-BG ইমেজ ও নিয়ন আভা ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 flex items-end justify-center">
        {/* ইমেজের পেছনে থাকা সিগনেচার পার্পল-ব্লু গ্লো আভা */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-b from-blue-600/25 to-indigo-700/5 blur-[140px] opacity-90" />

        {/* ইমেজের সাইজ অরিজিনাল ডিজাইনের মতো বড় করার জন্য উইডথ এবং বটম পজিশন লক করা হয়েছে */}
        <div className="absolute bottom-0  mix-blend-screen opacity-50 translate-y-[15%]">
          <Image
            src="/images/cta-bg.png"
            alt="CTA Grid Background"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>

      {/* ================= ২. মেইন কন্টেন্ট ================= */}
      <div className="relative z-10 container mx-auto w-full flex flex-col items-center text-center">
        {/* মূল শিরোনাম */}
        <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.15] max-w-3xl mb-4">
          Your next role is <br /> already looking for you
        </h2>

        {/* সাব-টাইটেল */}
        <p className="text-sm md:text-base text-zinc-500 font-normal max-w-2xl mb-12 tracking-wide">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* ================= ৩. অ্যাকশন বাটন সমূহ ================= */}
        <div className="flex flex-row items-center justify-center gap-4 w-auto">
          {/* Create a free account বাটন */}
          <Link
            href="#"
            className="px-6 h-11 bg-white text-black font-medium rounded-xl text-sm flex items-center justify-center hover:bg-zinc-200 transition-colors shadow-lg whitespace-nowrap"
          >
            Create a free account
          </Link>

          {/* View pricing বাটন */}
          <Link
            href="#"
            className="px-6 h-11 bg-transparent border border-white/[0.08] text-zinc-300 font-medium rounded-xl text-sm flex items-center justify-center hover:bg-white/[0.04] hover:text-white transition-all whitespace-nowrap"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
