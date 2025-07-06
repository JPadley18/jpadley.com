import { StaticImageData } from "next/image";
import Image from "next/image";
import { orbitron } from "@/util/fonts";

export default function ExperienceCard({ company, title, timespan, image, children, keySkills }: { company: string, title: string, timespan: string, image: StaticImageData, children: any, keySkills: { name: string, image: StaticImageData }[] }) {
    return (
        <div className="mx-40 mt-10">
            <h3 className={`${orbitron.className} font-extrabold text-text text-2xl lg:text-4xl py-1`}>{company}</h3>
            <h4 className={`${orbitron.className} font-bold text-text text-md lg:text-2xl pb-4 float-right`}>{timespan}</h4>
            <h4 className={`${orbitron.className} font-bold text-text text-md lg:text-2xl pb-4`}>{title}</h4>
            {children}
            <h4 className={`${orbitron.className} font-extrabold text-text text-lg lg:text-3xl mt-5`}>Key Skills</h4>
            <ul className="pt-5">
                {keySkills.map((skill) => (
                    <li key={skill.name} className="inline">
                        <Image src={skill.image} alt={skill.name} title={skill.name} className="w-12 h-12 lg:w-20 lg:h-20 object-fit inline first:ml-0 mx-2 lg:mx-4" />
                    </li>
                ))}
            </ul>
        </div>
    )
}