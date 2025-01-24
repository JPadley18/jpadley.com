import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="h-screen overflow-x-hidden bg-fixed bg-cover bg-gradient-to-br from-slate-900 to-zinc-900 text-slate-300">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}