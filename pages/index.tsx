import MainTitle from "@/components/main-title"
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import Divider from "@/components/divider"
import React from "react"
import { faDocker, faGolang, faNodeJs, faRaspberryPi, faPython, faJava, faAndroid, faJs, faReact } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    // Track the currently open modal dialog for the page
    const [ openModal, setOpenModal ] = React.useState<string | undefined>();
    const modalProps = { openModal, setOpenModal };

    return (
        <div>
            <MainTitle text="JACOB PADLEY" />

            <AboutMeCard />

            <Divider />

            <SubTitle text="My Projects" />

            <Project id="cordle" thumbnail={{
                path: "/cordle-thumb.png",
                alt: "Cordle project photo",
                width: 934,
                height: 684
            }}
            title="Cordle"
            description="Competitive Wordle bot for Discord. Complete with an elo system so that you can prove that you're better than your friends once and for all."
            longDescription="test long description"
            gallery={[
                {
                    path: "/cordle-thumb.png",
                    alt: "Cordle interface example",
                    width: 934,
                    height: 684
                },
                {
                    path: "/cordle-thumb.png",
                    alt: "Cordle interface example",
                    width: 934,
                    height: 684
                }
            ]}
            links={[
                <a href="amongus">
                    hello
                </a>
            ]}
            icons={[faGolang, faDocker, faNodeJs]}
            modalProps={modalProps} />

            <Project id="padley-tech" thumbnail={{
                path: "/padley-tech-thumb.jpg",
                alt: "padley.tech project photo",
                width: 690,
                height: 369
            }}
            title="padley.tech"
            description="This website was created in TypeScript using React with Next.js and Tailwind CSS."
            longDescription="test long description"
            gallery={[]}
            links={[]}
            icons={[faJs, faReact]}
            modalProps={modalProps} />

            <Project id="turtle" thumbnail={{
                path: "/turtle-thumb.jpg",
                alt: "Turtle printer project photo",
                width: 1243,
                height: 932
            }}
            title="Turtle Printer"
            description="A software I created to for new students joining the Royal Holloway Computing Society. It allows new programmers to write Python code that draws images using the Turtle library and print their creations on a thermal receipt printer."
            longDescription="test long description"
            gallery={[]}
            links={[]}
            icons={[faPython, faRaspberryPi]}
            modalProps={modalProps} />

            <Project id="toucan" thumbnail={{
                path: "/toucan-thumb.jpg",
                alt: "TouCan project photo",
                width: 947,
                height: 426
            }}
            title="TouCan"
            description="Android app using OpenCV to identify a drinks can using the phone camera and send directions to a Lego Mindstorms robot to navigate to the can."
            longDescription="test long description"
            gallery={[]}
            links={[]}
            icons={[faJava, faAndroid]}
            modalProps={modalProps} />

            <Project id="dataiker" thumbnail={{
                path: "/dataiker-thumb.jpg",
                alt: "DataIker Facial Recognition project photo",
                width: 1242,
                height: 932
            }}
            title="DataIker Facial Recognition"
            description="My machine learning project created during my work experience at Data Iku. Software for the Raspberry Pi that uses machine learning and OpenCV to identify and greet office members by name using facial recognition."
            longDescription="test long description"
            gallery={[]}
            links={[]}
            icons={[faPython, faRaspberryPi]}
            modalProps={modalProps} />
        </div>
    )
}