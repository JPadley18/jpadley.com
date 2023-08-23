import BackButton from "@/components/back-button"
import MainTitle from "@/components/main-title"
import Head from "next/head"

export default function Cordle() {
    return (
        <div>
            <Head>
                <title>Cordle - Jacob Padley</title>
            </Head>
            <BackButton href="/" />
            <MainTitle text="CORDLE" />
        </div>
    )
}