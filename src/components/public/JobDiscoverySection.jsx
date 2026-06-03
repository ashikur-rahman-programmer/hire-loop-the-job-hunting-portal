import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaBriefcase, FaDollarSign } from "react-icons/fa";

export default function JobDiscoverySection() {
  // প্রতিটি কার্ডের জন্য আলাদা ও ইউনিক কন্টেন্ট ডিকশনারি
  const jobs = [
    {
      title: "Frontend Developer",
      description:
        "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
    {
      title: "MERN Stack Engineer",
      description:
        "Build scalable web applications using MongoDB, Express, React, and Node.js with core optimization.",
      location: "San Francisco, USA",
      type: "Remote",
      salary: "€45–€60/hour",
    },
    {
      title: "UI/UX Designer",
      description:
        "Craft premium user experiences, high-fidelity wireframes, and design components for dark-themed platforms.",
      location: "London, UK",
      type: "On-site",
      salary: "€30–€45/hour",
    },
    {
      title: "Full-Stack Developer",
      description:
        "Bridge the gap between frontend fluid interactions and modern backend database management systems.",
      location: "Berlin, Germany",
      type: "Remote",
      salary: "€40–€55/hour",
    },
    {
      title: "DevOps Engineer",
      description:
        "Manage automated cloud pipelines, deployment architecture, and serverless infrastructure scaling.",
      location: "Toronto, Canada",
      type: "Hybrid",
      salary: "€50–€70/hour",
    },
    {
      title: "Backend Architect",
      description:
        "Design robust API structures, secure authentication systems, and optimize heavy database querying.",
      location: "Amsterdam, NL",
      type: "Remote",
      salary: "€48–€65/hour",
    },
  ];

  return (
    <section className="w-full bg-[#030303] text-white pt-24 pb-16 px-4 md:px-6 flex flex-col items-center justify-center">
      <div className="container mx-auto w-full flex flex-col items-center">
        {/* ================= ১. হেডার সেকশন ================= */}
        <div className="flex items-center gap-2 mb-5 bg-[#0b0b0c] border border-white/[0.04] px-4 py-1.5 rounded-md">
          <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-sm rotate-45" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#818cf8] uppercase">
            SMART JOB DISCOVERY
          </span>
          <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-sm rotate-45" />
        </div>

        <h2 className="mb-16 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-white">
          The roles you'd never <br /> find by searching
        </h2>

        {/* ================= ২. জব কার্ড গ্রিড ================= */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[24px] border border-white/[0.04] bg-[#0c0c0d] p-8 min-h-[330px]"
            >
              {/* কার্ডের ভেতরের কন্টেন্ট */}
              <div>
                <h3 className="text-[22px] font-medium tracking-tight text-white mb-3">
                  {job.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-normal mb-6 max-w-[270px]">
                  {job.description}
                </p>

                {/* মেটা ট্যাগসমূহ */}
                <div className="flex flex-wrap gap-2.5 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.02] text-xs text-zinc-300">
                    <IoLocationSharp className="text-[#f472b6] text-[13px]" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.02] text-xs text-zinc-300">
                    <FaBriefcase className="text-[#f472b6] text-[11px]" />
                    {job.type}
                  </span>
                </div>

                {/* স্যালারি ট্যাগ */}
                <div className="flex">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.02] text-xs text-zinc-300">
                    <FaDollarSign className="text-[#f472b6] text-[11px]" />
                    {job.salary}
                  </span>
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-normal text-white hover:opacity-80 transition-opacity"
                >
                  Apply Now
                  <FiArrowRight className="text-zinc-400 text-[15px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= ৩. বটম অ্যাকশন বাটন ================= */}
        <button className="bg-white text-black font-medium px-6 h-11 rounded-xl text-sm hover:bg-zinc-100 transition-colors">
          View all job open
        </button>
      </div>
    </section>
  );
}
