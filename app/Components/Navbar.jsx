"use client";

export default function Navbar() {

    const navLinks = [
        { label: 'Home', url: '/' },
        { label: 'Features', url: '/features' },
        { label: 'About', url: '/About' },
        { label: 'Integrations', url: '/integrations' }
    ]


    return (
        <main className="sticky top-0 flex w-full justify-center p-6 bg-amber-50 rounded-b-2xl z-10">
            <div className="flex items-center justify-center gap-10 text-center">
                {navLinks.map((item) => (
                    <a key={item.url} href={item.url} className="flex items-center justify-center text-center text-2xl text-black">
                        {item.label}
                    </a>
                ))}
            </div>
            <div className="flex ml-14 gap-5 items-center justify-center">
                <div className="flex border border-black items-end justify-end rounded-full">
                    <a href="../sign-in" className="flex px-5 py-4 justify-end items-end text-center text-black">Sign In</a>
                </div>
                <div className="flex border border-black items-end gap-1.5 justify-end rounded-full bg-green-300">
                    <a href="../sign-up" className="flex px-5 py-4 justify-end items-end text-center text-black">Sign Up</a>
                </div>
            </div>

        </main>
    )
}