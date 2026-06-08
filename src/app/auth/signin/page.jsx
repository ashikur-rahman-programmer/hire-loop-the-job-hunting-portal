"use client";

import { useState } from "react";
import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";
import { Eye, EyeSlash, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { data, error: authError } = await signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (authError) {
        setError(authError.message || "Invalid email or password.");
      } else {
        setSuccess("Signed in successfully! Redirecting...");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-[#0a0a0a]">
      {/* কার্ডে bg-zinc-900/50 এবং backdrop-blur যোগ করা হয়েছে ডার্ক থিমের জন্য */}
      <Card className="w-full max-w-md p-6 shadow-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
        {/* Header Container */}
        <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-800 mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSignin} className="flex flex-col gap-5">
          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-zinc-300">
              Email Address
            </Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-800 rounded-xl px-3 bg-zinc-950 focus-within:border-indigo-500 transition-colors">
              <At className="text-zinc-500 pointer-events-none" size={16} />
              <Input
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-100 placeholder:text-zinc-600"
              />
            </InputGroup>
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            name="password"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-zinc-300">
              Password
            </Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-800 rounded-xl px-3 bg-zinc-950 focus-within:border-indigo-500 transition-colors">
              <ShieldKeyhole
                className="text-zinc-500 pointer-events-none"
                size={16}
              />
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-100 placeholder:text-zinc-600"
              />
              <button
                className="focus:outline-none text-zinc-500 hover:text-zinc-200 transition"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
          </TextField>

          {/* Status Badges */}
          {error && (
            <div className="p-3.5 text-xs font-medium rounded-xl bg-red-950/30 text-red-400 border border-red-900/50">
              <span className="font-semibold">Error:</span> {error}
            </div>
          )}

          {success && (
            <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-950/30 text-emerald-400 border border-emerald-900/50">
              <span className="font-semibold">Success:</span> {success}
            </div>
          )}

          {/* Action Button */}
          <Button
            type="submit"
            color="primary"
            className="w-full font-semibold rounded-xl text-sm h-12 bg-indigo-600 hover:bg-indigo-500"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Sign In
          </Button>

          {/* Navigation Option */}
          <div className="text-center pt-4 border-t border-zinc-800 mt-2 text-sm text-zinc-400">
            New to HireLoop?{" "}
            <Link
              href="/auth/register"
              className="font-medium cursor-pointer text-sm text-indigo-400 hover:text-indigo-300"
            >
              Create an account
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
