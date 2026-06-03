import Image from "next/image";
import { FiBriefcase, FiUsers, FiStar } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function StatsSection() {
  return (
    <section className="relative w-full bg-[#030303] text-white pt-28  px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* ================= ১. ব্যাকগ্রাউন্ড গ্লোব ও নিয়ন গ্লো ইফেক্ট ================= */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full container mx-auto h-full pointer-events-none select-none z-0 flex items-center justify-center">
        <div className="  bottom-0 flex items-center justify-center ">
          <Image
            src="/images/globe.png"
            alt="Globe background"
            width={1300}
            height={1400}
            priority
          />
        </div>
      </div>

      {/* ================= ২. মেইন কন্টেন্ট এবং স্ট্যাটস গ্রিড ================= */}
      <div className="relative z-10 container mx-auto w-full flex flex-col items-center">
        {/* মাঝখানের মূল শিরোনাম */}
        <h2 className="mb-16 md:mb-20 max-w-3xl text-center text-3xl font-medium md:text-4xl lg:text-[40px] leading-[1.2] tracking-tight text-zinc-300">
          Assisting over{" "}
          <span className="text-white font-semibold">15,000 job seekers</span>{" "}
          <br />
          find their dream positions.
        </h2>

        {/* ৪টি প্রিমিয়াম ডার্ক স্ট্যাটস কলাম */}
        <div className="relative grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 -bottom-1">
          {/* কার্ড ১: Active Jobs */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#0c0c0d]/90 p-8 min-h-[190px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div>
              <FiBriefcase className="h-[18px] w-[18px] text-zinc-500" />
            </div>
            <div className="mt-8">
              <h3 className="text-[42px] font-bold tracking-tight text-white mb-1">
                50K
              </h3>
              <p className="text-xs font-medium text-zinc-500 tracking-wide">
                Active Jobs
              </p>
            </div>
          </div>

          {/* কার্ড ২: Companies */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#0c0c0d]/90 p-8 min-h-[190px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div>
              <HiOutlineBuildingOffice2 className="h-[18px] w-[18px] text-zinc-500" />
            </div>
            <div className="mt-8">
              <h3 className="text-[42px] font-bold tracking-tight text-white mb-1">
                12K
              </h3>
              <p className="text-xs font-medium text-zinc-500 tracking-wide">
                Companies
              </p>
            </div>
          </div>

          {/* কার্ড ৩: Job Seekers */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#0c0c0d]/90 p-8 min-h-[190px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div>
              <FiUsers className="h-[18px] w-[18px] text-zinc-500" />
            </div>
            <div className="mt-8">
              <h3 className="text-[42px] font-bold tracking-tight text-white mb-1">
                2M
              </h3>
              <p className="text-xs font-medium text-zinc-500 tracking-wide">
                Job Seekers
              </p>
            </div>
          </div>

          {/* কার্ড ৪: Satisfaction Rate */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#0c0c0d]/90 p-8 min-h-[190px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div>
              <FiStar className="h-[18px] w-[18px] text-zinc-500" />
            </div>
            <div className="mt-8">
              <h3 className="text-[42px] font-bold tracking-tight text-white mb-1">
                97%
              </h3>
              <p className="text-xs font-medium text-zinc-500 tracking-wide">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
