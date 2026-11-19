"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    if (pathname === "/sign-in" || pathname === "/sign-up") {
        return null;
    }


    
    const navLinks = [
        { label: 'Home', url: '/' },
        { label: 'Features', url: '/#features' },
        { label: 'About', url: '/About' },
        { label: 'Integrations', url: '/integrations' },
    ]


    return (
        <header className="sticky top-0 z-50 border-b border-[#25231f]/8 bg-[#f6f7f2]/90 px-5 backdrop-blur-xl">
            <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between">
                <Link href="/" className="shrink-0 text-xl font-black tracking-tight text-[#2f4c28]">
                    Across<span className="text-[#7c9c57]">Share</span>
                </Link>

                <div className="hidden items-center justify-center gap-1 lg:flex">
                {navLinks.map((item) => (
                    <Link key={item.url} href={item.url} className="rounded-full px-4 py-2.5 text-sm font-bold text-[#686760] transition hover:bg-white hover:text-[#405a31]">
                        {item.label}
                    </Link>
                ))}
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/sign-in" className="rounded-full px-4 py-2.5 text-sm font-bold text-[#686760] transition hover:bg-white hover:text-[#405a31]">
                        Sign in
                    </Link>
                    <Link href="/sign-up" className="rounded-full bg-[#5f7f43] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(95,127,67,0.18)] transition hover:bg-[#526e39]">
                        Sign up
                    </Link>
                </div>
            </nav>
        </header>
    )
}