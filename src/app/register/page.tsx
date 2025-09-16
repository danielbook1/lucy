"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterUser } from "@/models";
import { register } from "@/services/auth";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let user = { username, password } as RegisterUser;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(user); // uses your auth service
      router.push("/login"); // redirect to login on success
    } catch {
      setError("Could not register user");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 sm:mt-50">
      <img src="/logo.svg" alt="Lucy.Team Logo" className="mb-20" />
      <h1 className="text-black font-roboto text-[48px] font-bold leading-[63px] tracking-[-4px] text-center">
        SIGN UP
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
          className="placeholder:font-roboto placeholder:text-sm rounded-[7px] bg-[#e4e3e3] w-full pl-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="placeholder:font-roboto placeholder:text-sm rounded-[7px] bg-[#e4e3e3] w-full pl-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="placeholder:font-roboto placeholder:text-sm rounded-[7px] bg-[#e4e3e3] w-full pl-2"
        />
        <button
          type="submit"
          className="font-roboto font-bold rounded-[7px] bg-[#e4e3e3]"
        >
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
