import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function BackButton({ href }: { href: string }) {
    return (
        <div className="ml-2 mt-2 md:ml-10 md:mt-10">
            <Link href={href}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" style={{color: "#FFFFFF"}} className="hover:scale-110 transition-transform border-slate-200 border rounded-lg sm:p-2 shadow shadow-slate-200" fixedWidth />
            </Link>
        </div>
    )
}