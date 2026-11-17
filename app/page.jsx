import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-black/15">
      <h1 className="flex items-center justify-center text-center font-black mt-10 text-6xl text-white">A PLACE TO MANAGE YOUR SOCIALS</h1>
      <p className="flex items-center justify-center text-2xl p-4">Designed to aid in social media management</p>
      <div className="flex-col justify-center items-center m-40 mr-32 border p-5 rounded-full">
        <input type="text" placeholder="Enter your email..." className="flex border relative border-green-300 justify-center text-2xl focus-visible:bg-black focus:outline focus:outline-green-500 items-center px-25 py-5 w-1/2 text-white rounded-full" />
      </div>

    </main>
  );
}
