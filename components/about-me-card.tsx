import Image from "next/image"
import { faGraduationCap, faBuildingColumns, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { ubuntu } from "@/util/fonts"
import StatEntry from "./stat-entry"
import profileImg from "@/public/me.jpg"

export default function AboutMeCard() {
    return (
        <div className="bg-retro-stripes justify-center mt-10 xl:mt-20">
            <div className="mx-auto w-[95%] xl:w-1/2 h-full grid grid-cols-3 bg-text rounded-3xl py-5 xl:py-0 xl:rounded-full">
                <div className="col-span-3 xl:col-span-1">
                    <Image alt="Photo of myself" placeholder="blur" src={profileImg} className="rounded-full mx-auto xl:float-left px-3 py-3" />
                </div>
                <div className={`${ubuntu.className} text-white col-span-3 xl:col-span-2 ml-5 xl:ml-12 flex flex-col justify-evenly`}>
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