import MainTitle from "@/components/main-title"
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import { faGolang, faJava, faPython } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return (
        <div>
            <MainTitle text="JACOB PADLEY" />
            <AboutMeCard />
            <hr className="my-16 sm:my-32 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 w-1/2" />
            <SubTitle text="My Projects" />
            <Project image="/me.png" title="Cordle" description="test" href="/cordle" icons={[faGolang, faJava, faPython]} />
        </div>
    )
}