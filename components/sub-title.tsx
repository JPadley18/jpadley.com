import { orbitron } from "@/util/fonts"

export default function SubTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center text-5xl sm:text-6xl font-bold">
            <h1 className={`${orbitron.className} tracking-tight inline`}>
                {text}
            </h1>
            <h1 className={`${orbitron.className} ml-1 animate-blink inline text-primary`}>_</h1>
        </div>
    )
}