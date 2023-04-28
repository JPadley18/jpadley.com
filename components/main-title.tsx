import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
});

export default function MainTitle({ text }: { text: string }) {
    return (
        <h1 className={`${robotoMono.className} text-5xl sm:text-8xl text-center text-slate-300 [text-shadow:2px_2px_3px_#990000,-2px_-2px_3px_#000099] mt-5`}>{text}</h1>
    )
}