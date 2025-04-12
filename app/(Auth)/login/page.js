"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (email && password) {
      const user = { email };
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div className="pt-10 flex flex-col items-center justify-center min-h-screen bg-green-100 px-4">
      {isLoggedIn ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-green-800 text-center">
            You're already logged in.
          </h2>
          <LogOut
            onClick={handleLogout}
            className="cursor-pointer text-red-500 hover:text-red-700"
          />
        </div>
      ) : (
        <div className="flex w-full shadow-xl rounded-2xl max-w-lg flex-col items-center justify-center p-6 sm:p-10 bg-green-50 border border-gray-200">
          <Image src="/logo.png" alt="logo" width={170} height={50} />
          <h2 className="font-bold text-2xl sm:text-3xl mb-6 text-center text-green-900">
            Login to your account
          </h2>

          <input
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                router.push("/create-account");
              }
            }}
            className="w-full mt-3 bg-white border border-green-600 text-green-700 hover:bg-green-100 font-bold py-2 px-4 rounded"
          >
            Create an Account
          </button>
        </div>
      )}
    </div>
  );
}