import { openSans } from "@/app/layout";
import companyImage from "@/app/assets/company-image.png"
import winwFloatie1 from "@/app/assets/wine-floatie-1.png"
import Image from "next/image";
import winwFloatie2 from "@/app/assets/wine-floatie-2.png"

const AboutSection: React.FC = () => {

    return (
        <>
            <section id="about" className="target_section bg-neutral px-11 md:px-16 lg:px-32 xl:px-49 py-15 md:py-24 lg:py-32 xl:py-40">
                <div className="flex flex-col gap-29 md:gap-40 lg:gap-64 xl:gap-89">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <h3 className="text-primary text-center self-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium max-w-53 md:max-w-96 lg:max-w-128 xl:max-w-158.5 opacity-80">
                            WHO ARE WE?
                        </h3>

                        <div className="card md:card-side md:flex-row-reverse self-center bg-neutral w-full max-w-103 md:max-w-full rounded-none gap-4 md:gap-6 lg:gap-8 xl:gap-11">
                            <figure className="md:w-[50%]">
                                <img
                                    className="md:hidden"
                                    src={companyImage.src}
                                    alt="company" />

                                <img
                                    className="hidden md:flex"
                                    src={companyImage.src}
                                    alt="company" />
                            </figure>
                            <div className="card-body md:w-[50%] md:justify-center p-0">
                                <p className={"text-center md:text-left text-sm/6 md:text-base/8 text-justify xl:font-semibold text-base-content grow-0 " + openSans.className}>
                                    At XO WINE STORES LTD, every bottle is a journey, crafted with passion, aged to perfection, and selected for those who appreciate the finer things. As part of the Ubotex family, we bring you an exclusive collection of world-class wines, spirits, and champagnes, perfect for celebrations, quiet moments, and everything in between.                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <figure className="absolute w-14 md:w-24 lg:w-36 xl:w-50 h-16 md:h-24 lg:h-36 xl:h-56 -top-[65%] md:-top-[75%] lg:-top-[85%] xl:-top-[95%] right-[15%] md:right-[12%] lg:right-[9%] xl:right-[7%]">
                            <Image src={winwFloatie1} alt="wine floatie" />
                        </figure>

                        <h3 className="text-primary text-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80">
                            EXPLORE A WIDE SELECTION OF WINES FROM AROUND
                            <br />
                            THE WORLD
                        </h3>

                        <figure className="absolute w-14 md:w-24 lg:w-36 xl:w-50 h-16 md:h-24 lg:h-36 xl:h-56 -bottom-[35%] md:-bottom-[45%] lg:-bottom-[55%] xl:-bottom-[65%] left-[8%]">
                            <Image src={winwFloatie2} alt="wine floatie" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;