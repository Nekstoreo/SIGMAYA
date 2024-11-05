"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthBanner() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Contenedor principal para login y pie de página */}
      <div className="w-full max-w-3xl space-y-6">
        {/* Cuadro de login */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex items-center justify-between m-1">
            <div className="w-28 h-16 relative">
              <Image
                src="/images/institution-logo.svg"
                alt="Institution Logo"
                fill
                className="p-1 object-contain"
              />
            </div>
            <h1 className="text-3xl  font-bold text-black text-center flex-grow">
              SIGMAYA
            </h1>
            <div className="w-28 h-16 relative">
              <Image
                src="/images/institution-logo-2.png"
                alt="Application Logo"
                fill
                className="p-1 object-contain"
              />
            </div>
          </div>

          <div className="p-8">
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <Label htmlFor="idUsername" className="text-lg font-medium">
                    ID / Username
                  </Label>
                  <Input
                    id="idUsername"
                    placeholder="Enter your ID or Username"
                    required
                    className="w-full font-semibold shadow-zinc-400 shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="password" className="text-lg font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="w-full font-semibold shadow-zinc-400 shadow-md"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                aria-label="Log In"
              >
                Log In
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <div className="space-x-4">
                <Link href="/forgot-password" className="text-red-600 hover:underline">
                  Forget my password
                </Link>
                <Link href="/change-password" className="text-red-600 hover:underline">
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso de cookies y políticas */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">
          This website uses cookies to ensure that you get the best experience on our website. You can consult our{" "}
          <Link href="/cookie-policy" className="text-blue-600 hover:underline">
            Cookie Policy
          </Link>{" "}
          for more details.
        </p>
        <p className="text-sm text-gray-600">
          By logging in, you agree to our{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policies
          </Link>.
        </p>
      </div>
      </div>
    </div>
  );
}
