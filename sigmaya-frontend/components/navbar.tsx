import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  userRoles: Array<"student" | "teacher" | "friend">;
  userName: string;
}

export default function Navbar({ userRoles, userName }: NavbarProps) {
  const currentPath = usePathname();

  const tabs: Array<{ role: "student" | "teacher" | "friend"; label: string }> = [
    { role: "student", label: "Estudiante" },
    { role: "teacher", label: "Profesor" },
    { role: "friend", label: "Exalumno" },
  ];

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
              {tabs.map(
                (tab) =>
                  userRoles.includes(tab.role) && (
                    <Link
                      key={tab.role}
                      href={`/dashboard/${tab.role.toLowerCase()}`}
                      className={`${
                        currentPath === `/dashboard/${tab.role.toLowerCase()}`
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                    >
                      {tab.label}
                    </Link>
                  )
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="ml-3 relative">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt={userName} />
                <AvatarFallback>{userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}