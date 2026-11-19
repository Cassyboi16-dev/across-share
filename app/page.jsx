import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function Home() {
  const images = [
    {
      eyebrow: "Publishing",
      label: "Publish everywhere",
      description: "Create once and share polished content across every social channel.",
      url: "/publish",
      image: "/publish.jpg",
    },
    {
      eyebrow: "Newsletters",
      label: "Grow your audience",
      description: "Send thoughtful newsletters and keep your community engaged.",
      url: "/newsletters",
      image: "/emails.jpg",
    },
    {
      eyebrow: "Analytics",
      label: "Understand what works",
      description: "Turn audience activity into clear, actionable insights.",
      url: "/analytics",
      image: "/analytics.jpg",
    },
  ];

  return (
    <main className="min-h-dvh overflow-hidden bg-[#f6f7f2] text-[#25231f]">
      <section className="relative border-b border-[#25231f]/8">
        <div className="absolute left-[-140px] top-24 size-72 rounded-full bg-[#dce7c7]/70 blur-3xl" />
        <div className="absolute right-[-160px] top-[-60px] size-96 rounded-full bg-[#efbd67]/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1280px] items-center gap-12 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#71845a]/20 bg-white/70 px-4 py-2 text-sm font-bold text-[#5f7f43] shadow-sm">
              <span className="size-2 rounded-full bg-[#7ea05d]" />
              Social management, simplified
            </div>
            <h1 className="text-[48px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[64px] lg:text-[76px]">
              Your social life,
              <span className="block text-[#5f7f43]">all in one place.</span>
            </h1>
            <p className="mt-7 max-w-[540px] text-lg leading-8 text-[#77766f] sm:text-xl">
              Plan, publish, and understand your content without juggling a dozen different tools.
            </p>

            <form className="mt-9 flex max-w-[560px] flex-col gap-3 rounded-[20px] border border-[#25231f]/10 bg-white p-2 shadow-[0_18px_50px_rgba(47,55,35,0.10)] sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email..."
                className="min-w-0 flex-1 rounded-[14px] bg-transparent px-4 py-4 text-[16px] outline-none placeholder:text-[#aaa9a1] focus:ring-4 focus:ring-[#71845a]/10 sm:px-5"
              />
              <Link
                href="/sign-up"
                className="group flex shrink-0 items-center justify-center gap-2 rounded-[14px] bg-[#5f7f43] px-6 py-4 font-bold text-white transition hover:bg-[#526e39]"
              >
                Get started
                <MdArrowForward className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </form>

            <p className="mt-4 text-sm text-[#8a897f]">Free to start. No credit card required.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute -inset-5 rounded-[40px] bg-[#e8eadf]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border-[10px] border-white bg-[#dde4cf] shadow-[0_30px_80px_rgba(47,55,35,0.16)]">
              <Image
                src="/socials.jpg"
                alt="AcrossShare workspace preview"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl sm:left-[-28px]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71845a]">This week</p>
              <p className="mt-1 text-2xl font-black">+24.8%</p>
              <p className="text-sm text-[#77766f]">audience growth</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-20 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#71845a]">Built for momentum</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Everything you need to grow.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
          {images.map((item) => (
              <Link
                className="group overflow-hidden rounded-[24px] border border-[#25231f]/8 bg-white p-3 shadow-[0_16px_45px_rgba(47,55,35,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(47,55,35,0.12)]"
                href={item.url}
                key={item.url}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#e9eddf]">
                  <Image
                    src={item.image}
                    fill
                    sizes={0}
                    alt={item.label}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-4 pb-5 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71845a]">{item.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{item.label}</h3>
                  <p className="mt-3 leading-7 text-[#77766f]">{item.description}</p>
                  <div className="mt-5 flex items-center gap-2 font-bold text-[#5f7f43]">
                    Explore
                    <MdArrowForward className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
