"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Racing_Sans_One } from "next/font/google";

const racing_sans_one = Racing_Sans_One({
    weight: '400',
    subsets: ['latin'],
});

export default function AdminAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/authenticate-admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to authenticate");
            }

            router.push("/admin/dashboard");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full bg-gradient-to-br from-red-500 via-emerald-500 to-cyan-500 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-auto max-w-96 h-auto px-6 py-8 bg-white rounded-lg flex flex-col justify-center items-center gap-y-8 shadow-2xl shadow-black">
                <h2 className={`text-4xl mb-2 ${racing_sans_one.className} text-center`}>
                    MSI Admin
                </h2>

                {error && <p className="text-red-500 font-bold">{error}</p>}

                <section className="w-full h-auto flex justify-center items-start flex-col gap-y-2">
                    <label htmlFor="email" className="font-sans font-bold text-xl text-gray-900 capitalize text-left">Enter your email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full h-10 p-2 border border-gray-900 rounded-lg text-gray-900" 
                        placeholder="john.doe@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </section>

                <section className="w-full h-auto flex justify-center items-start flex-col gap-y-2">
                    <label htmlFor="password" className="font-sans font-bold text-xl text-gray-900 capitalize text-left">Enter your password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="w-full h-10 p-2 border border-gray-900 rounded-lg text-gray-900" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </section>

                <button 
                    type="submit" 
                    className="w-full h-auto py-1 px-4 bg-green-400 text-gray-900 capitalize font-bold rounded-md border-2 border-green-600 hover:bg-green-500 disabled:bg-gray-400 disabled:border-gray-600"
                    disabled={loading}
                >
                    {loading ? "Authenticating..." : "Submit"}
                </button>

                <section className="w-full h-auto flex justify-center items-center">
                    <p className="text-md text-gray-900 font-medium capitalize font-sans text-center">
                        Forgot your password? <a className="underline font-bold text-blue-500 hover:bg-blue-500 hover:text-white" href="">Click here</a> to reset
                    </p>
                </section>
            </form>
        </div>
    );
}