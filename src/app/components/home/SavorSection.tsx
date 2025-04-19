import ActionButton from "../ActionButton"
import savorSectionBG from "@/app/assets/savor-section-bg.png"
import montesTialaFloatie from "@/app/assets/montes-tiala-floatie.png"
import moetFloatie from "@/app/assets/moet-floatie.png"
import chateauFloatie from "@/app/assets/chateau-floatie.png"
import Image from "next/image"

const SavorSection: React.FC = () => {

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(to bottom, #000000EE, #00000000), url(${savorSectionBG.src})` }} className="relative bg-cover bg-center pt-17 md:pt-24 lg:pt-40 pb-12.5 md:pb-16 lg:pb-24 xl:py-48.5">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12.5">
                    <div className="flex flex-col gap-5 xl:gap-15 text-neutral text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[105px] xl:font-medium px-5 xl:px-18">
                            Savor
                            <br />
                            your taste
                            <br />
                            with
                            <br />
                            quality
                            <br />
                            wine
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <ActionButton to="" className="text-primary">Contact Us</ActionButton>
                    </div>
                </div>

                <div className="absolute bottom-2 right-2 hidden md:grid grid-cols-2 md:w-[16rem] lg:w-[20rem] xl:w-125">
                    <figure className="relative w-full md:h-44 lg:h-56 xl:h-71">
                        <Image
                            fill
                            src={montesTialaFloatie.src}
                            alt="image" />
                    </figure>

                    <figure className="relative w-full md:h-44 lg:h-56  h-71">
                    </figure>

                    <figure className="relative w-full md:h-44 lg:h-56  h-71">
                    </figure>

                    <figure className="relative w-full md:h-44 lg:h-56 xl:h-71">
                        <Image
                            fill
                            src={moetFloatie.src}
                            alt="image" />
                    </figure>
                </div>
                <figure className="absolute hidden md:flex bottom-[10%] left-4 md:w-[8rem] lg:w-[10rem] xl:w-62.5 md:h-44 lg:h-56 xl:h-71">
                    <Image
                        fill
                        src={chateauFloatie.src}
                        alt="image" />
                </figure>
            </section>
        </>
    )
}

export default SavorSection