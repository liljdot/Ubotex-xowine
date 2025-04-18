import { StaticImageData } from "next/image";
import XOWineStoreImage1 from "@/app/assets/xowinestore-image-1.png"
import XOWineStoreImage2 from "@/app/assets/xowinestore-image-2.png"
import ActionButton from "../ActionButton";

interface CardProps {
    image: StaticImageData;
    title: string;
    className?: string;
    titleClassName?: string;
}

const Card: React.FC<CardProps> = ({ image, title, className, titleClassName }) => {

    return (
        <>
            <div className={"card gap-1 md:gap-6 lg:gap-10 xl:gap-19.5 w-[50%] md:w-[38%] " + className}>
                <div className="card-body p-0 grow-0">
                    <h2 className={"card-title text-primary text-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80 " + titleClassName}>{title}</h2>
                </div>

                <figure className="grow rounded-none">
                    <img
                        className="h-full"
                        src={image.src}
                        alt="image" />
                </figure>
            </div>
        </>
    )
}

const XOWineStoreSection: React.FC = () => {

    return (
        <>
            <section className="flex flex-row md:justify-between md:h-150 lg:h-200 xl:h-259 2xl:h-300 my-15 md:my-24 lg:my-32 xl:my-40">
                <Card
                    title="XO WINE"
                    titleClassName="self-center md:self-end"
                    className="md:self-start"
                    image={XOWineStoreImage1} />

                <div className="card hidden md:flex self-end w-fit">
                    <div className="card-body items-center md:gap-6 lg:gap-9 xl:gap-13">
                        <h2 className="card-title text-primary text-center self-center text-xl lg:text-3xl xl:text-5xl font-semibold xl:font-medium opacity-80">
                            A
                            <br />
                            BOTTLE
                            <br />
                            OF
                            <br />
                            WINE
                            <br />
                            FOR
                            <br />
                            EVERY
                            <br />
                            CELEBRATION
                        </h2>
                        <div className="card-actions justify-end">
                            <ActionButton to="" className="bg-primary text-neutral">
                                Contact Us
                            </ActionButton>
                        </div>
                    </div>
                </div>

                <Card
                    title="STORES"
                    titleClassName="self-center md:self-start"
                    className="md:self-end"
                    image={XOWineStoreImage2} />
            </section>

            <div className="flex flex-col md:hidden gap-4 items-center max-w-72 mx-auto">
                <h1 className="text-xl text-center text-primary">
                    A BOTTLE OF WINE
                    FOR EVERY CELEBRATION
                </h1>

                <ActionButton to="" className="bg-primary text-neutral w-fit">
                    Contact Us
                </ActionButton>
            </div>
        </>
    )
}

export default XOWineStoreSection;