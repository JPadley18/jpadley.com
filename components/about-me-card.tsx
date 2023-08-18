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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-32 justify-center mt-20">
            <div>
                <Image alt="Photo of myself" src="/me.png" width="256" height="256" className="rounded-full mx-auto sm:ml-auto sm:mr-0" />
            </div>
            <div className={`${robotoMono.className} pl-5 sm:pl-0`}>
                <StatEntry text="Computer Science BSc (Hons)" icon={faGraduationCap} />
                <StatEntry text="Royal Holloway University of London" icon={faBuildingColumns} />
                <StatEntry text="JPadley18" href="https://github.com/JPadley18" icon={faGithub} />
                <StatEntry text="Jacob Padley" href="https://www.linkedin.com/in/jacob-padley/" icon={faLinkedin} />
            </div>
        </div>
    )
}