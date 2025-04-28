import { StaticImageData } from "next/image";
import henessyImage from "@/app/assets/henessy-image.png"
import martellImage from "@/app/assets/martell-image.png"
import bacardiImage from "@/app/assets/bacardi-image.png"
import { openSans } from "@/app/layout";
import Link from "next/link";
import { whatsappContact } from "@/app/data";

const WineCard: React.FC<{ title: string, image: StaticImageData }> = ({ title, image }) => {

    return (
        <>
            <div className="card gap-1 md:gap-2 xl:gap-3 w-22.5 md:w-40 lg:w-64 xl:w-91 rounded-none shrink-0 md:p-2.5 lg:p-4 xl:p-5">
                <figure className="h-22 md:h-36 lg:h-52 xl:h-75.5">
                    <img
                        src={image.src}
                        alt="wine"
                        className="" />
                </figure>
                <div className="card-body items-center text-center p-0">
                    <h2 className={"card-title text-xs xl:text-lg " + openSans.className}>{title}</h2>

                    <Link href={whatsappContact} className={openSans.className + " btn btn-primary w-full text-[0.6rem] md:text-sm lg:text-base font-normal h-8 md:h-12 lg:h-14 py-2 md:py-3 lg:py-4-none shadow-none rounded-full hover:scale-105 transition-all ease-in-out duration-300 "}>
                        Buy Now
                    </Link>
                </div>
            </div>
        </>
    )
}

const TopSellersSection: React.FC = () => {

    return (
        <>
            <section className="flex flex-col gap-5 md:gap-6 py-16 md:py-24 lg:py-32 xl:py-40">
                <h3 className="text-primary text-center self-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80">
                    TOP SELLERS
                </h3>

                <div className="flex flex-col md:flex-col-reverse gap-2.5 md:gap-6 lg:gap-10 xl:gap-15 px-9.5 xl:px-36">
                    <div className="flex flex-row justify-center gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                        <WineCard image={henessyImage} title="Henessy XO" />
                        <WineCard image={martellImage} title="Martell" />
                        <WineCard image={bacardiImage} title="Barcadi" />
                    </div>

                    <p className={"text-sm/6 md:text-base text-base-content text-justify " + openSans.className}>
                        Our bar offers a carefully curated selection of wines to suit every preference. Enjoy bold and velvety reds, crisp and refreshing whites, elegant rosés, and rich, bubbly champagnes. Whether you prefer dry, sweet, or something in between, we have the perfect pour for every occasion.
                    </p>
                </div>
            </section>
        </>
    )
}

export default TopSellersSection;