import { robotoMono } from "@/util/fonts"

export default function MainTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center mt-5">
            <h1 className="text-6xl md:text-8xl font-bold">{text}</h1>
        </div>
    )
}