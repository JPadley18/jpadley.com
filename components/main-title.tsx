import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
});

export default function MainTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center">
            <h1 className={`${robotoMono.className} text-5xl sm:text-8xl text-slate-900 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] mt-5 inline`}>[</h1>
            <h1 className={`${robotoMono.className} text-5xl sm:text-8xl text-slate-300 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] mt-5 inline`}>{text}</h1>
            <h1 className={`${robotoMono.className} text-5xl sm:text-8xl text-slate-900 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] mt-5 inline`}>]</h1>
        </div>
    )
}