import Image from "next/image"
import { faGraduationCap, faBuildingColumns, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { robotoMono } from "@/util/fonts"
import StatEntry from "./stat-entry"
import profileImg from "@/public/me.jpg"

export default function AboutMeCard() {
    return (
        <div className="bg-retro-stripes justify-center mt-20">
            <div className="mx-auto w-1/2 grid grid-cols-3 bg-text rounded-full">
                <div className="col-span-1">
                    <Image alt="Photo of myself" placeholder="blur" src={profileImg} className="rounded-full float-left px-3 py-3" />
                </div>
                <div className={`${robotoMono.className} text-white col-span-2 ml-12 flex flex-col justify-evenly`}>
                    <StatEntry text="Software Engineering Intern @ IBM UK" icon={faBriefcase} />
                    <StatEntry text="Studying for Computer Science BSc (Hons)" icon={faGraduationCap} />
                    <StatEntry text="Royal Holloway University of London" icon={faBuildingColumns} />
                    <StatEntry text="JPadley18" href="https://github.com/JPadley18" icon={faGithub} />
                    <StatEntry text="Jacob Padley" href="https://www.linkedin.com/in/jacob-padley/" icon={faLinkedin} />
                </div>
            </div>
        </div>
    )
}