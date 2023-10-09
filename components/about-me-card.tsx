import Image from "next/image"
import { faGraduationCap, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { robotoMono } from "@/util/fonts"
import StatEntry from "./stat-entry"
import profileImg from "@/public/me.png"

export default function AboutMeCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 justify-center mt-20">
            <div>
                <Image alt="Photo of myself" placeholder="blur" src={profileImg} className="rounded-full shadow-md shadow-gray-600 mx-auto md:ml-auto md:mr-0" />
            </div>
            <div className={`${robotoMono.className} pl-5 md:pl-0`}>
                <StatEntry text="Studying for Computer Science BSc (Hons)" icon={faGraduationCap} />
                <StatEntry text="Royal Holloway University of London" icon={faBuildingColumns} />
                <StatEntry text="JPadley18" href="https://github.com/JPadley18" icon={faGithub} />
                <StatEntry text="Jacob Padley" href="https://www.linkedin.com/in/jacob-padley/" icon={faLinkedin} />
            </div>
        </div>
    )
}