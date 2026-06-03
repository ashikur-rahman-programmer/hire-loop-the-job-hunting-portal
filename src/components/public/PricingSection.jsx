import { FiPlus, FiArrowRight } from "react-icons/fi";
import { LuCrown, LuActivity, LuZap } from "react-icons/lu";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      icon: <LuCrown className="text-[#f472b6] text-lg" />,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      price: "17",
      icon: <LuActivity className="text-[#f472b6] text-lg" />,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: true, // এটি ইমেজের মাঝখানের হাইলাইটেড কার্ড
    },
    {
      name: "Premium",
      price: "99",
      icon: <LuZap className="text-[#f472b6] text-lg" />,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="w-full bg-[#030303] text-white pt-24 pb-20 px-4 md:px-6 flex flex-col items-center justify-center">
      <div className="container mx-auto w-full flex flex-col items-center">
        {/* ================= ১. হেডার ব্যাজ ও টাইটেল ================= */}
        <div className="flex items-center gap-2 mb-5 bg-[#0b0b0c] border border-white/[0.04] px-4 py-1.5 rounded-md">
          <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-sm rotate-45" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#818cf8] uppercase">
            PRICING
          </span>
          <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-sm rotate-45" />
        </div>

        <h2 className="mb-10 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-white">
          Pay for the leverage, <br /> not the listings
        </h2>

        {/* ================= ২. টগল ফিল্টার (Monthly / Yearly) ================= */}
        <div className="flex items-center bg-[#0d0d0e] border border-white/[0.04] p-1 rounded-full mb-16">
          <button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full transition-all">
            Monthly
          </button>
          <button className="text-zinc-400 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
            Yearly
            <span className="bg-[#d946ef] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              25%
            </span>
          </button>
        </div>

        {/* ================= ৩. প্রাইসিং কার্ড গ্রিড ================= */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-[24px] p-8 min-h-[480px] bg-[#0c0c0d] transition-all duration-300 ${
                plan.isPopular
                  ? "border-2 border-white/[0.12] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]"
                  : "border border-white/[0.04]"
              }`}
            >
              <div>
                {/* কার্ড হেডার (আইকন, নাম এবং প্রাইস) */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                      {plan.icon}
                    </div>
                    <span className="text-lg font-medium text-zinc-300">
                      {plan.name}
                    </span>
                  </div>
                  <div className="flex items-baseline text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-zinc-500 text-xs ml-1">/month</span>
                  </div>
                </div>

                {/* ফিচার টাইটেল */}
                <p className="text-[13px] font-medium text-zinc-200 mb-5">
                  Start building your insights hub:
                </p>

                {/* ফিচার লিস্ট */}
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-[13px] text-zinc-500"
                    >
                      <div className="w-4 h-4 rounded bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiPlus className="text-zinc-600 text-[10px]" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="mt-10">
                <button
                  className={`w-full h-12 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-white/[0.04] border border-white/[0.02] text-zinc-300 hover:bg-white/[0.08]"
                  }`}
                >
                  Choose This Plan
                  <FiArrowRight className="text-[16px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
