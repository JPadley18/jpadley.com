import Image, { StaticImageData } from "next/image"
import { orbitron, ubuntu } from "@/util/fonts"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectModal from "./project-modal"

import type { JSX } from "react";

export default function Project({ id, thumbnail, title, description, longDescription, gallery, links, icons, modalProps }:
    { id: string, thumbnail: StaticImageData, title: string, description: string,
        longDescription: string, gallery: StaticImageData[], links: JSX.Element[], icons: IconDefinition[],
        modalProps: {openModal: string | undefined, setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>} }) {
    return (
        <>
            <ProjectModal modalName={id} modalTitle={title} modalContent={longDescription} icons={icons} gallery={gallery} links={links} modalProps={modalProps} />
            <div className="w-3/4 lg:w-4/5 bg-slate-900 border border-text shadow-lg hover:scale-105 transition-transform mx-auto mt-20 rounded-lg hover:cursor-pointer" onClick={() => modalProps.setOpenModal(id)}>
                <Image src={thumbnail} placeholder="blur" alt="Project photo" className="object-cover w-full h-60 rounded-t-lg" />
                <div className="p-5">
                    <h2 className={`${orbitron.className} text-2xl sm:text-3xl font-bold`}>{title}</h2>
                    <p className={`${ubuntu.className} text-md sm:text-lg tracking-tight pt-2`}>{description}</p>
                    <ul className="pt-5">
                        {icons.map((icon) => (
                            <li key={icon.iconName} className="inline">
                                <FontAwesomeIcon icon={icon} size="2x" className="pr-3 text-primary" fixedWidth/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}