import Image from "next/image"
import Link from "next/link"
import { robotoMono } from "@/util/fonts"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Project({ image, title, description, href, icons }: { image: string, title: string, description: string, href: string, icons: IconDefinition[] }) {
    return (
        <div className="w-3/4 lg:w-1/2 xl:w-1/3 bg-slate-900 border border-gray-200 shadow-lg hover:scale-105 transition-transform shadow-gray-600 mx-auto mt-20 rounded-lg">
                <Link href={href}>
                <Image src={image} alt="Project photo" width="256" height="256" className="object-cover w-full h-60 rounded-t-lg" />
                <div className="p-5">
                    <h2 className={`${robotoMono.className} text-3xl font-bold`}>{title}</h2>
                    <p className={`${robotoMono.className} text-lg text-slate-400 pt-2`}>{description}</p>
                    <ul className="pt-5">
                        {icons.map((icon) => (
                            <li key={icon.iconName} className="inline">
                                <FontAwesomeIcon icon={icon} size="2x" className="pr-3" style={{color: "#FFFFFF"}} fixedWidth/>
                            </li>
                        ))}
                    </ul>
                </div>
            </Link>
        </div>
    )
}