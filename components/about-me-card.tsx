import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
});

export default function AboutMeCard() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex min-w-max max-w-lg mt-32">
                <Image alt="Photo of myself" src="/me.png" width="256" height="256" className="rounded-full" />
                <div className="pl-40 text-2xl whitespace-nowrap text-right max-w-sm align-middle">
                    <p className={robotoMono.className}>
                        <FontAwesomeIcon icon={faGraduationCap} size="2x" style={{color:"#FFFFFF"}} className="pr-5"></FontAwesomeIcon>
                        Computer Science BSc (Hons)
                    </p>
                    <p className={`${robotoMono.className} pt-5`}>
                        <FontAwesomeIcon icon={faBuildingColumns} size="2x" style={{color:"#FFFFFF"}} className="pr-8"></FontAwesomeIcon>
                        Royal Holloway University of London
                    </p>
                </div>
            </div>
        </div>
    )
}