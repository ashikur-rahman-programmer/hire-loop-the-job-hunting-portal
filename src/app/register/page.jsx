"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({ name: "", email: "", password: "", confirmPassword: "" });

    const formData = new FormData(e.currentTarget);
    const { name, email, password, confirmPassword } = Object.fromEntries(
      formData.entries(),
    );

    let hasError = false;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      hasError = true;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      hasError = true;
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
      hasError = true;
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
      hasError = true;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Registration successful! Welcome aboard.");
      router.refresh();
      router.push("/");
    }
    if (error) {
      toast.error(error?.message || "Registration failed. Try again.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <section className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center px-4 sm:px-6 py-16 relative bg-[#030303]">
      {/* গ্লোয়িং ব্যাকগ্রাউন্ড ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[420px] mx-auto block relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-[#09090b]/80 backdrop-blur-xl border border-white/[0.05] p-8 sm:p-10 rounded-3xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)]"
        >
          {/* হেডার */}
          <div className="text-center flex flex-col items-center gap-2 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 bg-amber-400/5 px-3 py-1 rounded-full border border-amber-400/10 select-none">
              Join HireLoop
            </span>
            <h2 className="text-xl font-semibold tracking-wide text-zinc-200 uppercase mt-2">
              Create{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-bold">
                Account
              </span>
            </h2>
          </div>

          <Form onSubmit={handleRegister} className="space-y-4 w-full">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase flex items-center gap-2">
                <FiUser className="text-amber-400/80" /> Full Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full h-11 bg-zinc-900/50 border border-white/[0.06] rounded-xl px-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/40 focus:bg-zinc-900 transition-all duration-300"
              />
              {errors.name && (
                <span className="text-[11px] font-medium text-red-400/90 tracking-wide mt-0.5">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase flex items-center gap-2">
                <FiMail className="text-amber-400/80" /> Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 bg-zinc-900/50 border border-white/[0.06] rounded-xl px-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/40 focus:bg-zinc-900 transition-all duration-300"
              />
              {errors.email && (
                <span className="text-[11px] font-medium text-red-400/90 tracking-wide mt-0.5">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase flex items-center gap-2">
                <FiLock className="text-amber-400/80" /> Password
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full h-11 bg-zinc-900/50 border border-white/[0.06] rounded-xl px-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/40 focus:bg-zinc-900 transition-all duration-300"
              />
              {errors.password && (
                <span className="text-[11px] font-medium text-red-400/90 tracking-wide mt-0.5">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase flex items-center gap-2">
                <FiLock className="text-amber-400/80" /> Confirm Password
              </label>
              <input
                required
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full h-11 bg-zinc-900/50 border border-white/[0.06] rounded-xl px-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/40 focus:bg-zinc-900 transition-all duration-300"
              />
              {errors.confirmPassword && (
                <span className="text-[11px] font-medium text-red-400/90 tracking-wide mt-0.5">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-3 w-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(251,191,36,0.15)] flex items-center justify-center"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </div>
          </Form>

          {/* Divider */}
          <div className="relative flex py-6 items-center w-full">
            <div className="flex-grow border-t border-white/[0.04]"></div>
            <span className="flex-shrink mx-4 text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
              Or join with
            </span>
            <div className="flex-grow border-t border-white/[0.04]"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full h-11 bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.15] text-zinc-300 hover:text-white font-semibold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-all duration-300 hover:bg-zinc-900 flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-amber-400/90 text-sm" /> Google Sign Up
          </button>

          <p className="text-center text-xs text-zinc-500 mt-8 w-full">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4 font-medium transition-all"
            >
              Sign In here
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterPage;
