import Image from "next/image"
export default function AboutMeCard() {
    return (
        <div className="flex items-center justify-center mt-10">
            <a className="mx-20 [font-size:20rem] [line-height:1] [text-shadow:3px_3px_4px_#990000,-3px_-3px_4px_#000099] text-slate-300">&#123;</a>
            <Image alt="Photo of myself" src="/me.png" width="256" height="256" className="rounded-full [filter:drop-shadow(7px_7px_0px_#004487)]" />
            <a className="mx-20 [font-size:20rem] [line-height:1] [text-shadow:3px_3px_4px_#990000,-3px_-3px_4px_#000099] text-slate-300">&#125;</a>
        </div>
    )
}