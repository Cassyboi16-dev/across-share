"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="min-h-dvh bg-[#f6f7f2] px-4 py-4 text-[#25231f] sm:px-6 sm:py-6">
      <section className="mx-auto grid min-h-[calc(100dvh-3rem)] max-w-[1280px] overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_24px_70px_rgba(47,55,35,0.12)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative hidden min-h-[680px] overflow-hidden bg-[#dce7c7] lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(101,142,74,0.28),transparent_32%)]" />
          <Link href="/" className="absolute left-9 top-8 z-10 text-xl font-black tracking-tight text-[#2f4c28]">
            Across<span className="text-[#7c9c57]">Share</span>
          </Link>
          <Image
            src="/across-share.jpg"
            alt="AcrossShare social publishing dashboard"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#1f301a]/80 via-[#1f301a]/20 to-transparent px-10 pb-10 pt-24">
            <p className="max-w-md text-3xl font-bold leading-tight text-white">
              Everything you need to grow your social presence.
            </p>
          </div>
        </div>

        <div className="flex min-h-[calc(100dvh-2rem)] items-center justify-center px-6 py-10 sm:px-12 lg:min-h-0 lg:px-16">
          <div className="w-full max-w-[420px]">
            <Link href="/" className="mb-14 inline-block text-xl font-black tracking-tight text-[#2f4c28] lg:hidden">
              Across<span className="text-[#7c9c57]">Share</span>
            </Link>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#71845a]">Welcome back</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-[44px]">Sign in to your account</h1>
            <p className="mt-3 text-[15px] leading-7 text-[#77766f]">
              Enter your details to continue managing your content.
            </p>

            <form className="mt-9 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#3f3d37]">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-13 w-full rounded-xl border border-[#dedfd7] bg-[#fafbf7] px-4 text-[15px] outline-none transition placeholder:text-[#aaa9a1] focus:border-[#71845a] focus:ring-4 focus:ring-[#71845a]/10"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#3f3d37]">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="h-13 w-full rounded-xl border border-[#dedfd7] bg-[#fafbf7] px-4 text-[15px] outline-none transition placeholder:text-[#aaa9a1] focus:border-[#71845a] focus:ring-4 focus:ring-[#71845a]/10"
                />
              </label>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-[#686760]">
                  <input type="checkbox" className="size-4 accent-[#5f7f43]" />
                  Remember me
                </label>
                <a href="#" className="font-bold text-[#5f7f43] hover:text-[#405a31]">
                  Forgot password?
                </a>
              </div>

              <Link
                href="/dashboard"
                className="h-13 w-full p-5 rounded-xl bg-[#5f7f43] text-base font-bold text-white shadow-[0_12px_24px_rgba(95,127,67,0.22)] transition hover:bg-[#526e39] active:translate-y-px"
              >
                Sign in
              </Link>
            </form>

            <p className="mt-7 text-center text-sm text-[#77766f]">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-bold text-[#5f7f43] hover:text-[#405a31]">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}