import { StaticImageData } from "next/image";
import { orbitron } from "@/util/fonts";

export default function ExperienceCard({ company, title, timespan, image, children }: { company: string, title: string, timespan: string, image: StaticImageData, children: any }) {
    return (
        <div className="mx-5 mt-10">
            <h3 className={`${orbitron.className} font-extrabold text-text text-2xl lg:text-4xl py-1`}>{company}</h3>
            <h4 className={`${orbitron.className} font-bold text-text text-md lg:text-2xl pb-4 float-right`}>{timespan}</h4>
            <h4 className={`${orbitron.className} font-bold text-text text-md lg:text-2xl pb-4`}>{title}</h4>
            {children}
        </div>
    )
}