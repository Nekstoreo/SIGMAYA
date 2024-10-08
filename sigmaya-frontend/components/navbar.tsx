'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  userRoles: Array<"Estudiante" | "Profesor" | "Exalumno/Amigo">;
  userName: string;
}

export default function Navbar({ userRoles, userName }: NavbarProps) {
  const currentPath = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/images/institution-logo.svg" alt="Logo" height={32} width={60} />
              <span className="ml-2 text-xl font-semibold">SIGMAYA</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/dashboard"
                className={`${
                  currentPath === "/dashboard"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Inicio
              </Link>
              {userRoles.includes("Estudiante") && (
                <Link
                  href="/dashboard/student"
                  className={`${
                    currentPath === "/dashboard/student"
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Estudiante
                </Link>
              )}
              {userRoles.includes("Profesor") && (
                <Link
                  href="/dashboard/teacher"
                  className={`${
                    currentPath === "/dashboard/teacher"
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Profesor
                </Link>
              )}
              {userRoles.includes("Exalumno/Amigo") && (
                <Link
                  href="/dashboard/friend"
                  className={`${
                    currentPath === "/dashboard/friend"
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Exalumno
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="ml-3 relative">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt={userName}
                />
                <AvatarFallback>
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}