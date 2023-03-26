export default function MainTitle({ text }: { text: string }) {
    return (
        <h1 className="text-8xl text-center text-slate-300 font-mono [text-shadow:3px_3px_4px_#990000,-3px_-3px_4px_#000099]">{text}</h1>
    )
}