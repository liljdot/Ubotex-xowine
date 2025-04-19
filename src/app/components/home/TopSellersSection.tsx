import { StaticImageData } from "next/image";
import henessyImage from "@/app/assets/henessy-image.png"
import martellImage from "@/app/assets/martell-image.png"
import bacardiImage from "@/app/assets/bacardi-image.png"
import { openSans } from "@/app/layout";
import Link from "next/link";

const WineCard: React.FC<{ title: string, image: StaticImageData }> = ({ title, image }) => {

    return (
        <>
            <div className="card bg-base-100 w-22.5 rounded-none shrink-0">
                <figure className="h-22">
                    <img
                        src={image.src}
                        alt="wine"
                        className="" />
                </figure>
                <div className="card-body items-center text-center p-0">
                    <h2 className={"card-title text-xs " + openSans.className}>{title}</h2>

                    <Link href={""} className={openSans.className + " btn btn-primary w-full text-[0.6rem] md:text-sm lg:text-base font-normal h-8 md:h-12 lg:h-14 py-2 md:py-3 lg:py-4 border-none shadow-none rounded-full hover:scale-105 transition-all ease-in-out duration-300 "}>
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
            <section className="flex flex-col gap-5 py-16">
                <h3 className="text-primary text-center self-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80">
                    TOP SELLERS
                </h3>

                <div className="flex flex-col gap-2.5 px-9.5">
                    <div className="flex flex-row justify-center gap-4">
                        <WineCard image={henessyImage} title="Henessy XO" />
                        <WineCard image={martellImage} title="Martell" />
                        <WineCard image={bacardiImage} title="Barcadi" />
                    </div>

                    <p className={"text-sm/6 text-base-content text-center " + openSans.className}>
                        Our bar offers a carefully curated selection of wines to suit every preference. Enjoy bold and velvety reds, crisp and refreshing whites, elegant rosés, and rich, bubbly champagnes. Whether you prefer dry, sweet, or something in between, we have the perfect pour for every occasion.
                    </p>
                </div>
            </section>
        </>
    )
}

export default TopSellersSection;