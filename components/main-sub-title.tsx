import { orbitron } from "@/util/fonts"

export default function MainSubTitle({ text }: { text: string }) {
    return (
        <div className="w-screen text-center mt-5">
            <h2 className={`text-2xl md:text-5xl font-bold ${orbitron.className}`}>{text}</h2>
        </div>
    )
}