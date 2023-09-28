import MainTitle from "@/components/main-title"
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import Divider from "@/components/divider"
import { faDocker, faGolang, faNodeJs, faRaspberryPi, faPython, faJava, faAndroid } from "@fortawesome/free-brands-svg-icons"

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
            <Project image="/turtle-thumb.jpg" width={1243} height={932} title="Turtle Printer"
            description="Software allowing new programmers to write Python code to draw images using the Turtle library and print their creations on a thermal receipt printer."
            href="/turtle" icons={[faPython, faRaspberryPi]} />
            <Project image="/toucan-thumb.png" width={1920} height={864} title="TouCan"
            description="Android app using OpenCV to identify a drinks can using the phone camera and send directions to a Lego Mindstorms robot to navigate to the can."
            href="/toucan" icons={[faJava, faAndroid]} />
            <Project image="/cordle-thumb.png" width={934} height={684} title="DataIker Recognition"
            description="Software for the Raspberry Pi that uses machine learning and OpenCV to identify and greet office members by name using facial recognition."
            href="/toucan" icons={[faPython, faRaspberryPi]} />
            <Project image="/cordle-thumb.png" width={934} height={684} title="PyDrake"
            description="Python wrapper for the League of Legends API."
            href="/toucan" icons={[faPython]} />
        </div>
    )
}