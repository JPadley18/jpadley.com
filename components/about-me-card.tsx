import Image from "next/image"

export default function AboutMeCard() {
    return (
        <div className="flex items-center justify-center mt-10">
            <Image alt="Photo of myself" src="/me.png" width="256" height="256" className="rounded-full" />
        </div>
    )
}