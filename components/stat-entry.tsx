import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export default function StatEntry({ icon, text }: { icon: IconDefinition, text: string }) {
    return (
        <p className="pt-4 flex items-center text-xl">
            <FontAwesomeIcon icon={icon} size="2x" style={{color:"#FFFFFF"}} className="pr-5" fixedWidth />
            {text}
        </p>
    )
}