"use client";
import Image from "next/image";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {

const footLinks = [
    {label: "Facebook", url:"https://www.facebook.com", icon: <FaFacebook />},
    {label: "YouTube", url: "https://www.youtube.com", icon: <FaYoutube />},
    {label: "Instagram", url: "https://www.instagram.com", icon: <FaInstagram />},
    {label: "TikTok", url: "https://www.tiktok.com", icon: <AiFillTikTok />}
]

    return (
        <footer className="bg-lime-950 text-white">
            <div className="mx-auto max-w-[1280px] px-6 py-12 sm:px-10 lg:py-16">
                <Image
                    src="/Across Share.svg"
                    alt="Across Share Logo"
                    height={800}
                    width={800}
                    className="h-30 w-30 rounded-full bg-lime-400/40"
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <section className="min-h-64 rounded-2xl border border-white/15 p-6 sm:p-8">
                        <h2 className="text-center text-2xl font-bold italic sm:text-3xl">Features</h2>
                    </section>

                    <section className="min-h-64 rounded-2xl border border-white/15 p-6 sm:p-8">
                        <h2 className="text-center text-2xl font-bold italic sm:text-3xl">Integrations</h2>
                        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {footLinks.map((item) => (
                                <a
                                    href={item.url}
                                    key={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit Across Share on ${item.label}`}
                                    className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-sm font-bold text-lime-300 transition hover:border-lime-300/50 hover:bg-white/10 sm:min-h-28"
                                >
                                    <span className="text-3xl sm:text-4xl" aria-hidden="true">
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}