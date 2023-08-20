import MainTitle from "@/components/main-title";
import AboutMeCard from "@/components/about-me-card";

export default function Home() {
    return (
        <div>
            <MainTitle text="JACOB PADLEY" />
            <AboutMeCard />
            <hr className="my-48 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 w-1/2" />
        </div>
    )
}