import MainTitle from "@/components/main-title"
import MainSubTitle from "@/components/main-sub-title";
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title"
import Project from "@/components/project"
import Divider from "@/components/divider"
import React from "react"
import { faDocker, faGolang, faNodeJs, faRaspberryPi, faPython, faJava, faAndroid, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import StatEntry from "@/components/stat-entry"
import Head from "next/head"

import cordleThumbnail from "@/public/cordle-thumb.png"
import cordleCarousel1 from "@/public/cordle-1.jpg"
import cordleCarousel2 from "@/public/cordle-2.jpg"
import padleyThumbnail from "@/public/padley-tech-thumb.jpg"
import turtleThumbnail from "@/public/turtle-thumb.jpg"
import toucanThumbnail from "@/public/toucan-thumb.jpg"
import dataikerThumbnail from "@/public/dataiker-thumb.jpg"

export default function Home() {
    // Track the currently open modal dialog for the page
    const [ openModal, setOpenModal ] = React.useState<string | undefined>();
    const modalProps = { openModal, setOpenModal };

    return (
        <div>
            <Head>
                <title>Jacob Padley</title>
                <meta property="og:title" content="Jacob Padley" key="title" />
                <meta property="descripton" content="Full-Stack developer. My personal portfolio website." key="description" />
                <meta property="og:descripton" content="Full-Stack developer. My personal portfolio website." key="og-description" />
            </Head>

            <MainTitle text="Jacob Padley" />
            <MainSubTitle text="Software Engineer" />

            <AboutMeCard />
            <Divider />
            <SubTitle text="My Projects" />

            <Project id="cordle" thumbnail={cordleThumbnail}
            title="Cordle"
            description="Competitive Wordle bot for Discord. Complete with an elo system so that you can prove that you're better than your friends once and for all."
            longDescription="Cordle began as a project for Royal Hackaway V6, a 24-hour hackathon event run by the Royal Holloway Computing Society. It consists of a Discord Bot which, 
            when present in a Discord server, allows users of the server to challenge each other to duels of the popular word puzzle game, 'Wordle'.
            <br>
            Both players play at the same time and work towards the same goal word. The first player to solve their puzzle is the winner, and will gain competitive points while their opponent will lose points. 
            The bot also allows users to view their stats or the stats of another player, such as career wins, losses and draws. Users can also view a top-10 style leaderboard of all Cordle 
            players.
            <br>
            Cordle was originally written in NodeJS using a Firebase database, and after Royal Hackaway I worked with another member of the original team to re-make Cordle using Go with 
            a MySQL database, which greatly increased the performance of the bot. We containerised the project with Docker and hosted it, finally creating a stable release version of Cordle."
            gallery={[cordleThumbnail, cordleCarousel1, cordleCarousel2]}
            links={[
                <StatEntry key="github" icon={faGithub} text="Cordle GitHub" href="https://github.com/cordle-bot/cordle-bot" />,
                <StatEntry key="devpost" icon={faLink} text="Hackaway Devpost Page" href="https://devpost.com/software/cordle" />,
                <StatEntry key="legacy-github" icon={faGithub} text="Legacy GitHub" href="https://github.com/cordle-bot/cordle-legacy" />
            ]}
            icons={[faGolang, faDocker, faNodeJs]}
            modalProps={modalProps} />

            <Project id="padley-tech" thumbnail={padleyThumbnail}
            title="jpadley.com"
            description="This website was created in TypeScript using React with Next.js and Tailwind CSS."
            longDescription="This is the very website you are currently viewing! I began work on this website both as a way to document my programming projects and 
            to learn how to use React. This website uses React with Next.JS, as well as Tailwind CSS and Flowbite JS for styling. It's been through a few design iterations, there's no telling when I'll finally leave it alone!"
            gallery={[padleyThumbnail]}
            links={[
                <StatEntry key="github" icon={faGithub} text="jpadley.com GitHub" href="https://github.com/JPadley18/jpadley.com" />
            ]}
            icons={[faJs, faReact]}
            modalProps={modalProps} />

            <Project id="turtle" thumbnail={turtleThumbnail}
            title="Turtle Printer"
            description="A software I created to for new students joining the Royal Holloway Computing Society. It allows new programmers to write Python code that draws images using the Turtle library and print their creations on a thermal receipt printer."
            longDescription="Turtle Printer is a software written in Python using Tkinter as an extension to the popular Python Turtle library, which provides an easy, beginner 
            friendly way to create images using simple programming concepts in Python. I came up with this idea while on the Computing Society committee at Royal Holloway as 
            a fun way to get freshers into coding. The software saw a large amount of use during our introductory events at the beginning of the school year, and produced lots 
            interesting images.
            <br>
            The software provides the user with an area in which they can input Python code to send commands to the Turtle which is drawn on the right-hand side of the screen. 
            The code can then be executed to produce an image. The hardest part of this project was 'sandboxing' the code area to prevent malicious code from being run that 
            could damage the software or the host computer. In the end, I achieved this by creating a carefully controlled list of functions that the user is allowe to use in 
            the sandbox.
            <br>
            Once the user has created their image, they can submit it. It is then sent over Wi-Fi to a Raspberry Pi that in turn sends the image to a thermal receipt printer, 
            which allowed the freshers to take home their drawings."
            gallery={[turtleThumbnail]}
            links={[
                <StatEntry key="github" icon={faGithub} text="Turtle Printer GitHub" href="https://github.com/rhul-compsoc/turtle-printer" />,
                <StatEntry key="server-github" icon={faGithub} text="Server GitHub" href="https://github.com/rhul-compsoc/turtle-printer-server" />
            ]}
            icons={[faPython, faRaspberryPi]}
            modalProps={modalProps} />

            <Project id="toucan" thumbnail={toucanThumbnail}
            title="TouCan"
            description="Android app using OpenCV to identify a drinks can using the phone camera and send directions to a Lego Mindstorms robot to navigate to the can."
            longDescription="I created the TouCan app as part of a group coursework project in which we were tasked with programming a Lego Mindstorms robot using Java. 
            The robot's objective was to use a phone camera to locate a can of RedBull (wrapped in pink paper for visibility) and send information about its location to 
            the robot, which could then navigate to it and grab it using a claw on the front of the robot.
            <br>
            The app uses OpenCV to filter out colours other than the shade of pink it is calibrated for using the calibration mode of the app. It then takes the largest 
            of the visible blobs of colour and sends the screen coordinates of its center to the robot over a Wi-Fi connection. The robot will then move left or right in 
            order to keep the center of the can in the center of the camera, while moving forwards towards the can. Eventually, the robot detects the can touching the claw 
            and closes, capturing the can."
            gallery={[toucanThumbnail]}
            links={[
                <StatEntry key="github" icon={faGithub} text="TouCan GitHub" href="https://github.com/JPadley18/TouCan" />
            ]}
            icons={[faJava, faAndroid]}
            modalProps={modalProps} />

            <Project id="dataiker" thumbnail={dataikerThumbnail}
            title="DataIker Facial Recognition"
            description="My machine learning project created during my work experience at Data Iku. Software for the Raspberry Pi that uses machine learning and OpenCV to identify and greet office members by name using facial recognition."
            longDescription="I created this project during my work experience at data science company DataIku. It consists of a Raspberry Pi that uses OpenCV and an onboard 
            camera to identify human faces that it can see. In its 'learning' mode, it will store each captured image of a face on an Amazon S3 bucket. These images can then 
            be labelled using a webapp that I created. I created a machine learning model on the company's bespoke software, DSS, which can use these labelled images to learn 
            to distinguish the different employees of DataIku (or 'DataIkers') by name using only their face.
            <br>
            If the device is not in 'learning' mode, it will instead use an API endpoint on DSS 
            to attempt to identify any office member that walks past the camera, and greet them by name on the LCD screen attached to the Pi."
            gallery={[dataikerThumbnail]}
            links={[
                <StatEntry key="github" icon={faGithub} text="Project GitHub" href="https://github.com/JPadley18/dataiker-recognition" />
            ]}
            icons={[faPython, faRaspberryPi]}
            modalProps={modalProps} />
        </div>
    )
}