import Image from "next/image"
import { faGraduationCap, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Roboto_Mono } from "next/font/google"
import StatEntry from "./stat-entry";

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
});

export default function AboutMeCard() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex min-w-max max-w-lg mt-32">
                <Image alt="Photo of myself" src="/me.png" width="256" height="256" className="rounded-full" />
                <div className={`${robotoMono.className} pl-32 text-2xl whitespace-nowrap max-w-sm align-middle"`}>
                    <StatEntry text="Computer Science BSc (Hons)" icon={faGraduationCap} />
                    <StatEntry text="Royal Holloway University of London" icon={faBuildingColumns} />
                    <StatEntry text="JPadley18" icon={faGithub} />
                    <StatEntry text="Jacob Padley" icon={faLinkedin} />
                </div>
            </div>
        </div>
    )
}