'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AuthBanner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-700 to-red-900 p-1">
          <div className="flex items-center justify-between m-1">
            <div className="w-16 h-16 relative">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Institution Logo"
                layout="fill"
                objectFit="contain"
                className="rounded-full bg-white p-1"
              />
            </div>
            <h1 className="text-3xl font-bold text-white text-center flex-grow">
              SIGMAYA
            </h1>
            <div className="w-16 h-16 relative">
              <Image
                src="/images/logo-upb-kitprensa-imagen-institucional-1464096760882.png"
                alt="Application Logo"
                layout="fill"
                objectFit="contain"
                className="rounded-full bg-white p-1"
              />
            </div>
          </div>
        </div>
        <div className="p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="idUsername" className="text-lg font-medium">
                ID / Username
              </Label>
              <Input
                id="idUsername"
                placeholder="Enter your ID or Username"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
            <p className="text-sm text-gray-600">
              This website uses cookies to ensure that you get the best experience on our website.
              You can consult our{" "}
              <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                Cookie Policy
              </Link>{" "}
              for more details.
            </p>
            <p className="text-sm text-gray-600">
              By logging in, you agree to our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policies
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}