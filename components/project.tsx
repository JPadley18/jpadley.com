import Image from "next/image"
import { robotoMono } from "@/util/fonts"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectModal from "./project-modal"

export default function Project({ id, image: thumbnail, width, height, title, description, longDescription, gallery, links, icons, modalProps }:
    { id: string, image: string, width: number, height: number, title: string, description: string,
        longDescription: string, gallery: string[], links: JSX.Element[], icons: IconDefinition[],
        modalProps: {openModal: string | undefined, setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>} }) {
    return (
        <>
            <ProjectModal modalName={id} modalTitle={title} modalContent={longDescription} icons={icons} gallery={gallery} links={links} modalProps={modalProps} />
            <div className="w-3/4 lg:w-1/2 xl:w-1/3 bg-slate-900 border border-gray-200 shadow-lg hover:scale-105 transition-transform shadow-gray-600 mx-auto mt-20 rounded-lg hover:cursor-pointer" onClick={() => modalProps.setOpenModal(id)}>
                <Image src={thumbnail} alt="Project photo" width={width} height={height} className="object-cover w-full h-60 rounded-t-lg" />
                <div className="p-5">
                    <h2 className={`${robotoMono.className} text-2xl sm:text-3xl font-bold`}>{title}</h2>
                    <p className={`${robotoMono.className} text-md sm:text-lg text-slate-400 tracking-tight pt-2`}>{description}</p>
                    <ul className="pt-5">
                        {icons.map((icon) => (
                            <li key={icon.iconName} className="inline">
                                <FontAwesomeIcon icon={icon} size="2x" className="pr-3" style={{color: "#FFFFFF"}} fixedWidth/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}