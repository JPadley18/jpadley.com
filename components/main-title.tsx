import { orbitron } from "@/util/fonts"

export default function MainTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center mt-5">
            <h1 className={`text-5xl md:text-8xl font-black retro-multi-shadow ${orbitron.className}`}>{text}</h1>
        </div>
    )
}