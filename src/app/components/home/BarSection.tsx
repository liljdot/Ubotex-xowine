import { openSans } from "@/app/layout";
import Gallery from "./Gallery";

const BarSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral flex flex-col gap-6 md:gap-7 lg:gap-8 py-15 md:py-24 lg:py-36 xl:py-45">
                <div className="flex flex-col gap-2.5 md:gap-4 lg:gap-6 xl:gap-7.5">
                    <h3 className="text-primary text-center self-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80">
                        OUR BAR
                    </h3>

                    <p className={"text-center text-sm/6 md:text-base/8 text-base-content grow-0 px-12 md:px-20 lg:px-32 xl:px-47.5 " + openSans.className}>
                        Our bar offers a carefully curated selection of wines to suit every preference. Enjoy bold and velvety reds, crisp and refreshing whites, elegant rosés, and rich, bubbly champagnes. Whether you prefer dry, sweet, or something in between, we have the perfect pour for every occasion.
                    </p>
                </div>

                <Gallery />
            </section>
        </>
    )
}

export default BarSection;