import Image from 'next/image'
import { MdArrowForward } from "react-icons/md";

export default function Home() {

  const images = [
    { label: 'Publish Content Across All Socials', url: "/publish", image:"publish.jpg"  },
    { label: 'Send Newsletters To Your Subscribers', url: '/newsletters', image: '' },
    { label: 'View In-depth Analytics', url: '/analytics', image: '' },
  ]

  return (
    <main className="min-h-dvh bg-[#2b2422] text-[#f5f0eb]">
      <section className="mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:px-8">
        <h1 className="font-serif text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          A PLACE TO MANAGE YOUR SOCIALS
        </h1>
        <p className="flex flex-col items-center gap-2 text-2xl font-bold sm:text-3xl">
          Designed to make managing your socials,
          <span className="text-3xl font-extrabold uppercase text-green-400 sm:text-4xl">
            feel like a breeze
          </span>
        </p>
        <div className="mt-8 flex w-full max-w-5xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-5">
          <input
            type="text"
            placeholder="Enter your email..."
            className="min-w-0 flex-1 rounded-full border border-green-300 bg-transparent px-6 py-5 text-lg text-white placeholder:text-[#b9aca4] focus:outline-2 focus:outline-offset-2 focus:outline-green-400 sm:text-xl"
          />
          <a
            href="https://cassyboi.site"
            className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-400 px-8 py-5 text-xl text-black transition-colors hover:bg-green-500"
          >
            Get Started
            <MdArrowForward className="shrink-0 transition-transform duration-300 group-hover:-rotate-45" />
          </a>
        </div>
      </section>
      <div className="min-h-dvh bg-amber-700">
        <div className="flex gap-24 items-center justify-center">
          {images.map((index) => (
            <div className="border p-10 mt-25 rounded-4xl" key={index.url}>
              <Image
                src={index.url}
                width={300}
                height={300}
                alt='An Image'
              />
              <h1>{index.label}</h1>
            </div>
          ))

          }

        </div>
      </div>
    </main>
  );
}
