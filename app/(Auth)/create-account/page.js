"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  checkAuthState,
  registerUser,
  saveUserToFirestore,
} from "@/app/FirebaseAPI";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  useEffect(() => {
    const unsubscribe = checkAuthState((user) => {
      if (user) {
        router.push("/create-accoun");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignup = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      try {
        const { user, error } = await registerUser(email, password);
        if (user) {
          const saveResult = await saveUserToFirestore(user.uid, email, username);
          if (saveResult.success) {
            router.push("/");
          } else {
            setError("Failed to save user to Firestore.");
          }
        } else {
          setError(error.message);
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.");
      }
    };

  return (
    <div className="pt-10 flex items-center justify-center min-h-screen bg-gray-50" style={{ minHeight: "100vh" }}>
      <div className="flex w-full max-w-lg shadow-xl flex-col items-center justify-center p-6 sm:p-10 bg-white rounded-lg">
        <Image src="/logo.png" alt="logo" width={150} height={150} priority />
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your Email and Password to create a new account
        </p>
        <div className="w-full flex flex-col gap-4 mt-6">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Email (e.g., user@gmail.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
          <Button
            className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            onClick={handleSignup}
          >
            Register
          </Button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <p className="text-center text-gray-600">
            Already have an account?
            <Link href={"/login"} className="text-blue-500 pl-2 underline">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;