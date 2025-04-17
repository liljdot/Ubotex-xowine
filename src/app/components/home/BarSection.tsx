import { openSans } from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import Gallery from "./Gallery";

const BarSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral flex flex-col gap-6 py-15 xl:py-45">
                <div className="flex flex-col gap-2.5 md:gap-8 lg:gap-12 xl:gap-7.5">
                    <h3 className="text-primary text-center self-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80">
                        OUR BAR
                    </h3>

                    <p className={"text-center text-sm/6 md:text-base/8 xl:font-semibold text-base-content grow-0 px-12 md:px-10 lg:px-20 xl:px-32 " + openSans.className}>
                        Our bar offers a carefully curated selection of wines to suit every preference. Enjoy bold and velvety reds, crisp and refreshing whites, elegant rosés, and rich, bubbly champagnes. Whether you prefer dry, sweet, or something in between, we have the perfect pour for every occasion.
                    </p>
                </div>

                <Gallery />
            </section>
        </>
    )
}

export default BarSection;