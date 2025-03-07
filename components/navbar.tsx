"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Briefcase, 
  Menu, 
  X, 
  User, 
  LogIn 
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/app/assets/MicroEng (9).png"
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="MicroEngineers careers logo" width={68} height={68}/>
          <span className="font-bold text-xl bg-gradient-to-br from-blue-900 via-sky-500 to-black text-transparent bg-clip-text">TribeMicro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/jobs" className="text-sm font-medium transition-colors hover:text-primary">
            Browse Jobs
          </Link>
          <Link href="/post-job" className="text-sm font-medium transition-colors hover:text-primary">
            For Employers
          </Link>
          <Link href="https://microengineers.org" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">
              <User className="mr-2 h-4 w-4" />
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link 
                href="/jobs" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Jobs
              </Link>
              <Link 
                href="/post-job" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                For Employers
              </Link>
              <Link 
                href="https://microengineers.org" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="mr-2 h-4 w-4" />
                    Log In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}