import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

import type { JSX } from "react";

export default function StatEntry({ icon, text, href="" }: { icon: IconDefinition,text: string, href?: string }) {
    let innerText: JSX.Element|string
    if(href != "") {
        // Is a link
        innerText = <a target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-600" href={href}>{text}</a>
    } else {
        // Is regular text
        innerText = text
    }

    return (
        <p className="flex items-center text-lg sm:text-xl tracking-tight">
            <FontAwesomeIcon icon={icon} size="2x" className="pr-5" fixedWidth />
            {innerText}
        </p>
    )
}