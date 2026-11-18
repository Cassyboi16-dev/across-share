"use client";

export default function SignIn() {
    return (
        <main className="flex flex-col m-30 items-end w-1/2 justify-end">
            <div className="flex flex-col m-30 p-15 items-center w-1/2 justify-center bg-green-500/30 rounded-2xl shadow-xl shadow-green-400">
                <h1 className="text-4xl p-10">Sign In</h1>
                <div className="flex m-25">
                    <div className="flex flex-col">
                        <input type="email" placeholder="Email..." />
                        <input type="password" name="password" id="security" placeholder="password..." />
                    </div>
                </div>
            </div>

        </main>
    )
}