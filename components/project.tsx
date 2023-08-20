import Image from "next/image"
import { robotoMono } from "@/util/fonts"

export default function Project( { image, title, description, href }: { image: string, title: string, description: string, href: string } ) {
    return (
        <div className="w-3/4 sm:w-1/3 bg-slate-900 border border-gray-200 shadow-lg shadow-gray-600 mx-auto mt-20 rounded-lg">
            <Image src={image} alt="Project photo" width="256" height="256" className="object-cover w-full h-60 rounded-t-lg" />
            <div className="p-5">
                <h2 className={`${robotoMono.className} text-4xl font-bold`}>{title}</h2>
                <p className={`${robotoMono.className} text-xl text-slate-400`}>{description}</p>
            </div>
        </div>
    )
}