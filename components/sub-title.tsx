import { robotoMono } from "@/util/fonts"

export default function SubTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center">
            <h1 className={`${robotoMono.className} text-5xl sm:text-7xl text-slate-900 inline [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099]`}>&gt;&nbsp;</h1>
            <h1 className={`${robotoMono.className} text-5xl sm:text-6xl text-slate-400 inline`}>
                {text}
            </h1>
        </div>
    )
}