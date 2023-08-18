import Image from "next/image"

export default function AboutMeCard() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex min-w-max max-w-lg mt-10">
                <Image alt="Photo of myself" src="/me.png" width="256" height="256" className="rounded-full" />
                <div className="pl-60">
                    <p className="text-right max-w-sm">
                        
                    </p>
                </div>
            </div>
        </div>
    )
}