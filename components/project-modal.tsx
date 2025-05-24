import { Carousel, CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image"
import { orbitron, ubuntu } from "@/util/fonts";

import type { JSX } from "react";

// Define custom styling for the Modal component
const modalTheme: CustomFlowbiteTheme = {
    "modal": {
        "root": {
            "show": {
                "on": "flex bg-background bg-opacity-70",
                "off": "hidden"
            },
        },
        "content": {
            "inner": "relative rounded-lg bg-background shadow-lg shadow-gray-600 border border-text flex flex-col max-h-[90vh]"
        },
        "header": {
            "base": "flex items-start justify-between rounded-t p-5",
            "title": `${orbitron.className} text-5xl text-text font-black inline`,
            "close": {
                "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-primary hover:bg-secondary",
                "icon": "h-10 w-10"
            },
        },
    },
    "carousel": {
        "indicators": {
            "active": {
            "off": "bg-accent/50 hover:bg-secondary",
            "on": "bg-accent"
            },
            "base": "h-3 w-3 rounded-full",
            "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
        },
        "control": {
            "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-text/30 group-hover:bg-text/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-text sm:h-10 sm:w-10",
            "icon": "h-5 w-5 text-text sm:h-6 sm:w-6"
        },
    }
};

function makeImage(image: StaticImageData) {
    return (
        <Image key={image.src} src={image} alt="Carousel image" placeholder="blur" className="relative object-cover w-full sm:w-2/3 h-70 rounded-xl" />
    )
}

function makeGallery(gallery: StaticImageData[]) {
    if(gallery.length == 0) {
        return;
    } else if(gallery.length == 1) {
        return makeImage(gallery[0]);
    } else {
        return (
            <Carousel>
                {gallery.map((img) => makeImage(img))}
            </Carousel>
        )
    }
}

export default function ProjectModal({ modalName, modalTitle, modalContent, icons, gallery, links, modalProps }:
    { modalName: string, modalTitle: string, modalContent: string, icons: IconDefinition[], gallery: StaticImageData[], links: JSX.Element[],
        modalProps: {openModal: string | undefined, setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>} }) {
    return (
        <Flowbite theme={{theme: modalTheme}}>
            <Modal dismissible show={modalProps.openModal === modalName} size="4xl" onClose={() => modalProps.setOpenModal(undefined)}>
                <Modal.Header>{modalTitle}</Modal.Header>
                <ul className="pl-5">
                    {icons.map((icon) => (
                        <li key={icon.iconName} className="inline">
                            <FontAwesomeIcon icon={icon} size="2x" className="pr-3 text-primary" fixedWidth/>
                        </li>
                    ))}
                </ul>
                <Modal.Body>
                    <div className={`${ubuntu.className}`}>
                        <div className="mb-5">
                            {makeGallery(gallery)}
                        </div>
                        <div className="space-y-6">
                            {modalContent.split("<br>").map((line, i) => <p key={i.toString()}>{line}</p>)}
                        </div>
                        <hr className="my-3 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 w-1/2" />
                        <div>
                            <ul className="py-2">
                                {links.map((link) => link)}
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Flowbite>
    )
}