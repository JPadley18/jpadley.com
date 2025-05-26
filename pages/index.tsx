import MainTitle from "@/components/main-title";
import MainSubTitle from "@/components/main-sub-title";
import AboutMeCard from "@/components/about-me-card"
import SubTitle from "@/components/sub-title";
import Project from "@/components/project";
import ExperienceCard from "@/components/experience-card";
import Divider from "@/components/divider";
import React from "react";
import { faDocker, faGolang, faNodeJs, faRaspberryPi, faPython, faJava, faAndroid, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faGamepad } from "@fortawesome/free-solid-svg-icons";
import StatEntry from "@/components/stat-entry";
import Head from "next/head";
import { ubuntu } from "@/util/fonts";

import cordleThumbnail from "@/public/cordle-thumb.png";
import cordleCarousel1 from "@/public/cordle-1.jpg";
import cordleCarousel2 from "@/public/cordle-2.jpg";
import it4Carousel1 from "@/public/it4-1.png";
import it4Carousel2 from "@/public/it4-2.png";
import it4Carousel3 from "@/public/it4-3.png";
import it4Carousel4 from "@/public/it4-4.png";
import tunerCarousel1 from "@/public/tuner-1.png";
import tunerCarousel2 from "@/public/tuner-2.png";
import tunerCarousel3 from "@/public/tuner-3.png";
import tunerCarousel4 from "@/public/tuner-4.png";
import padleyThumbnail from "@/public/padley-tech-thumb.jpg";
import turtleThumbnail from "@/public/turtle-thumb.jpg";
import toucanThumbnail from "@/public/toucan-thumb.jpg";
import dataikerThumbnail from "@/public/dataiker-thumb.jpg";

import k8sLogo from "@/public/k8s.svg";
import jsLogo from "@/public/js.svg";
import perlLogo from "@/public/perl.svg";
import mongoLogo from "@/public/mongodb.png";
import jenkinsLogo from "@/public/jenkins.svg";
import dockerLogo from "@/public/docker.webp";

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

            <SubTitle text="My Experience" />

            <ExperienceCard company="IBM" title="Software Engineering Intern - MQ" timespan="2024 - Present" image={it4Carousel1} keySkills={[{
                name: "Kubernetes",
                image: k8sLogo,
            },
            {
                name: "NodeJS",
                image: jsLogo,
            },
            {
                name: "Perl",
                image: perlLogo,
            },
            {
                name: "MongoDB",
                image: mongoLogo,
            },
            {
                name: "Jenkins",
                image: jenkinsLogo,
            },
            {
                name: "Docker",
                image: dockerLogo,
            }]}>
                <p className={`${ubuntu.className}`}>
                    During my 12-month internship at IBM, I took up a role in DevOps for IBM MQ. This was a role that was quite different from the experience I already had, so I saw it as a great
                    opportunity to pick up some new skills and experiences. Keen to get the most out of the 12 months that I had there, I dove straight in to learning new things. I took on a project
                    creating and deploying two new NodeJS microservices onto a Kubernetes cluster as part of a larger, existing application, which helped me learn a lot about Kubernetes itself and
                    the concept of containerisation. My project involved creating new APIs, as well as utilising existing ones, and making use of messaging systems to facilitate communication between
                    each microservice. Working on an existing codebase was also a new experience for me, having worked mostly on my own personal projects up to this point. As part of a team, I gained
                    valuable experience in using Git and GitHub as part of a team, using proper practices such as feature branches, Pull Requests and Reviews. I then had
                    the opportunity to tackle some work involving our automated build system, which made extensive use of Perl scripting. The scripts I worked on had to work across a huge variety
                    of platforms, so this work gave me a better understanding of how to write cross-platform code that is reliable and fast.
                    <br /><br />
                    As I gained experience in the tools and processes of the team, I volunteered to take on issues that were raised for our internal tooling, which allowed me to gain confidence and
                    experience working under more urgency, especially when the issues raised were critical. I also delivered demonstrations of features I had written, which built my valuable
                    presentation and teamwork skills.
                    <br /><br />
                    Towards the end of my internship, I was offered and accepted an extension for a further year, working remotely part-time during my studies at University. I was delighted to receive
                    this offer as I believe it reflected all of the hard work that I put in over the initial 12 months that I worked at IBM.
                </p>
            </ExperienceCard>

            <Divider />

            <SubTitle text="My Projects" />

            <div className="lg:grid lg:grid-cols-2">
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

                <Project id="it4" thumbnail={it4Carousel3}
                title="It Takes Two to Tango"
                description="1 vs. 1 online puzzle game based on the popular LinkedIn puzzle game, Tango. It's a real-time race to see who can solve the puzzle first!"
                longDescription="It Takes Two to Tango was our project for Royal Hackaway V8, the eighth annual 24-hour hackathon event hosted by the Royal Holloway Computing Society. The game
                is a real-time multiplayer browser game where two players face off to try to solve a Tango puzzle the fastest. The game features a display in which you can see the progress of your
                opponent compared to your own, which is updated in real time as you play. The first player to solve the puzzle is the winner.
                <br>
                The browser game was written using React, and makes use of Web Sockets to communicate with the Go back-end, which enables real-time communication to take place between players and the
                game server. The game also features a lobby system, where players can create, view, and join public game lobbies to play against their friends.
                <br>
                As the team member most experienced in Go, the majority of my work on this project was on the back-end service, in which I wrote the underlying communication logic that allowed the players
                to stay in sync with each other, as well as the logic governing the mechanics of the game, and the API that allowed the creation, viewing and joining of lobbies.
                <br>
                We were extremely honoured to take home 3rd place overall at Royal Hackaway V8 with this project!"
                gallery={[it4Carousel1, it4Carousel2, it4Carousel3, it4Carousel4]}
                links={[
                    <StatEntry key="play" icon={faGamepad} text="Play It Takes Two to Tango!" href="http://tango.sherv.co.uk" />,
                    <StatEntry key="github" icon={faGithub} text="It Takes Two to Tango GitHub" href="https://github.com/JPadley18/it-takes-two-to-tango" />,
                    <StatEntry key="devpost" icon={faLink} text="Hackaway Devpost Page" href="https://devpost.com/software/it-takes-two-to-tango" />,
                ]}
                icons={[faGolang, faDocker, faNodeJs, faReact]}
                modalProps={modalProps} />

                <Project id="tuner" thumbnail={tunerCarousel3}
                title="Tuner"
                description="A real-time online quiz game that turns your most listened to Spotify tracks into a music quiz for you and your friends!"
                longDescription="Tuner was our entry for HackSussex 2024's 24-hour Hackathon event. It is a real-time quiz game (think Kahoot) in which you and your friends log in using your Spotify account,
                allowing Tuner to shuffle together your most listened to tunes and turn them into a musical guessing game. There are multiple rounds in which a song will play, and four options will be presented
                that players use to try and identify the song. The player with the most correct guesses at the end wins!
                <br>
                During this project, I began working primarily on the back-end API service that I wrote in Go, which needed to integrate with the Spotify API in order to allow players to log in using their Spotify
                accounts. I then worked on a system that would allow the server to look at the most played tracks of each player in the game and shuffle them together into a randomised quiz for the players to play.
                I also worked on the Web Socket system that allowed players to play in real-time against each other and stay in sync with each other. Later in the hackathon, I moved on to working on the React front
                end as we were struggling to get it up to speed with the rest of the project. In the end, we came out with a very well-rounded project that we were all very proud of.
                "
                gallery={[tunerCarousel1, tunerCarousel2, tunerCarousel3, tunerCarousel4]}
                links={[
                    <StatEntry key="github" icon={faGithub} text="Tuner GitHub" href="https://github.com/j3-n/tuner" />,
                    <StatEntry key="devpost" icon={faLink} text="HackSussex Devpost Page" href="https://devpost.com/software/tuner-47zkyn" />,
                ]}
                icons={[faGolang, faDocker, faNodeJs, faReact]}
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
        </div>
    )
}