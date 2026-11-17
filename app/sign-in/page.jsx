"use client";

export default function SignIn(){
    return(
        <main>
            <h1>Sign In</h1>
            <div className="flex">
                <div>
                    <input type="email" placeholder="Email..."/>
                    <input type="password" name="password" id="security" placeholder="password..."/>
                </div>
            </div>
        </main>
    )
}