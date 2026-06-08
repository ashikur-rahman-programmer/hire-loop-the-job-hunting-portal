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
  RadioGroup,
  Radio,
} from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { data, error: authError } = await signUp.email({
        email,
        password,
        name,
        role,
        callbackURL: "/signin",
      });

      if (data) {
        setSuccess("Account created successfully!");
        router.push("/signin");
      }
      if (authError) {
        setError(authError.message || "Something went wrong during signup.");
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-[#0a0a0a]">
      <Card className="w-full max-w-md p-6 shadow-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-800 mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Create an account
          </h1>
          <p className="text-sm text-zinc-400">
            Fill in the fields below to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          {/* Name Field */}
          <TextField isRequired name="name" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-300">Name</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-800 rounded-xl px-3 bg-zinc-950 focus-within:border-indigo-500 transition-colors">
              <Person className="text-zinc-500" size={16} />
              <Input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent py-2 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none"
              />
            </InputGroup>
          </TextField>

          {/* Email Field */}
          <TextField isRequired name="email" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-300">
              Email Address
            </Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-800 rounded-xl px-3 bg-zinc-950 focus-within:border-indigo-500 transition-colors">
              <At className="text-zinc-500" size={16} />
              <Input
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none"
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
              <ShieldKeyhole className="text-zinc-500" size={16} />
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="text-zinc-500 hover:text-zinc-200"
              >
                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
          </TextField>

          {/* Role Selection */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium text-zinc-300">
              Account Type
            </Label>
            <RadioGroup
              defaultValue="seeker"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              orientation="horizontal"
            >
              <Radio value="seeker" className="text-zinc-300">
                Job Seeker
              </Radio>
              <Radio value="recruiter" className="text-zinc-300">
                Recruiter
              </Radio>
            </RadioGroup>
          </div>

          {error && (
            <div className="p-3.5 text-xs rounded-xl bg-red-950/30 text-red-400 border border-red-900/50">
              {error}
            </div>
          )}

          <Button
            type="submit"
            color="primary"
            className="w-full font-semibold rounded-xl h-12 bg-indigo-600 hover:bg-indigo-500"
            isLoading={isLoading}
          >
            Sign Up
          </Button>

          <div className="text-center pt-4 border-t border-zinc-800 mt-2 text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Sign in instead
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
