import MainTitle from "@/components/main-title"
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import Divider from "@/components/divider"
import { faDocker, faGolang, faNodeJs } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return (
        <div>
            <MainTitle text="JACOB PADLEY" />
            <AboutMeCard />
            <Divider />
            <SubTitle text="My Projects" />
            <Project image="/cordle-thumb.png" width={934} height={684} title="Cordle"
            description="Competitive Wordle bot for Discord. Complete with an elo system so that you can prove that you're better than your friends once and for all."
            href="/cordle" icons={[faGolang, faDocker, faNodeJs]} />
        </div>
    )
}