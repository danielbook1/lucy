"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/services/auth";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await authenticate(username, password);
      router.push("/"); // redirect to home on success
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 sm:mt-50">
      <img src="/logo.svg" alt="Lucy.Team Logo" className="mb-20" />
      <h1 className="text-black font-roboto text-[48px] font-bold leading-[63px] tracking-[-4px] text-center">
        LOGIN
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 my-4 w-80"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="placeholder:font-roboto placeholder:text-sm rounded-[7px] bg-[#e4e3e3] w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="placeholder:font-roboto placeholder:text-sm rounded-[7px] bg-[#e4e3e3] w-full"
        />
        <button
          type="submit"
          className="font-roboto font-bold rounded-[7px] bg-[#e4e3e3]"
        >
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
      <a
        href="/register"
        className="font-roboto font-bold rounded-[7px] bg-[#e4e3e3] w-80 text-center"
      >
        Sign Up
      </a>
    </div>
  );
}
