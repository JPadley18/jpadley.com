import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function BackButton({ href }: { href: string }) {
    return (
        <div className="ml-10 mt-10">
            <Link href={href}>
                <FontAwesomeIcon icon={faArrowLeft} size="3x" style={{color: "#FFFFFF"}} className="hover:scale-110 transition-transform" fixedWidth />
            </Link>
        </div>
    )
}