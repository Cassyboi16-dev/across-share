"use client";

export default function Navbar() {

    const navLinks = [
        { label: 'Home', url: '/' },
        { label: 'Features', url: '/features' },
        { label: 'About', url: '/About' },
        { label: 'Integrations', url: '/integrations' }
    ]


    return (
        <main className="sticky top-0 flex w-full justify-center bg-black p-6">
            <div className="flex items-center justify-center gap-10 text-center">
                {navLinks.map((item) => (
                    <a key={item.url} href={item.url} className="flex items-center justify-center text-center text-2xl text-white">
                        {item.label}
                    </a>
                ))}
            </div>
            <div className="flex border items-end justify-end mx-10">
                <a href="../sign-in" className="flex justify-end items-end">Sign In</a>
            </div>
        </main>
    )
}