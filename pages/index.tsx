import MainTitle from "@/components/main-title"
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import Divider from "@/components/divider"
import { faDocker, faGolang, faNodeJs, faRaspberryPi, faPython, faJava, faAndroid, faJs, faReact } from "@fortawesome/free-brands-svg-icons"

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

            <Project image="/padley-tech-thumb.jpg" width={690} height={369} title="padley.tech"
            description="This website was created in TypeScript using React with Next.js and Tailwind CSS."
            href="https://github.com/JPadley18/padley.tech" icons={[faJs, faReact]} />

            <Project image="/turtle-thumb.jpg" width={1243} height={932} title="Turtle Printer"
            description="A software I created to for new students joining the Royal Holloway Computing Society. It allows new programmers to write Python code that draws images using the Turtle library and print their creations on a thermal receipt printer."
            href="https://github.com/rhul-compsoc/turtle-printer" icons={[faPython, faRaspberryPi]} />

            <Project image="/toucan-thumb.jpg" width={947} height={426} title="TouCan"
            description="Android app using OpenCV to identify a drinks can using the phone camera and send directions to a Lego Mindstorms robot to navigate to the can."
            href="https://github.com/JPadley18/TouCan" icons={[faJava, faAndroid]} />

            <Project image="/dataiker-thumb.jpg" width={1242} height={932} title="DataIker Facial Recognition"
            description="My machine learning project created during my work experience at Data Iku. Software for the Raspberry Pi that uses machine learning and OpenCV to identify and greet office members by name using facial recognition."
            href="https://github.com/JPadley18/dataiker-recognition" icons={[faPython, faRaspberryPi]} />
        </div>
    )
}