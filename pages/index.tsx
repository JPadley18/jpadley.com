import MainTitle from "@/components/main-title"
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import Divider from "@/components/divider"
import { faGolang, faJava, faPython } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return (
        <div>
            <MainTitle text="JACOB PADLEY" />
            <AboutMeCard />
            <Divider />
            <SubTitle text="My Projects" />
            <Project image="/cordle-thumb.png" width={934} height={684} title="Cordle" description="test" href="/cordle" icons={[faGolang, faJava, faPython]} />
        </div>
    )
}