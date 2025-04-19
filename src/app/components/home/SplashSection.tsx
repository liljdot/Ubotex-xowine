import Image from "next/image";
import splashSectionBG from "@/app/assets/splash-section-bg.png"

interface Props {
    text: string;
    author?: string;
    positionClassName?: string;
}

const Quote: React.FC<Props> = ({ text, positionClassName, author }) => {

    return (
        <div className={"absolute flex flex-col max-w-19.5 md:max-w-36 lg:max-w-52 xl:max-w-68.5 " + positionClassName}>
            <h6 className="text-[10px] md:text-base lg:text-lg xl:text-2xl">
                {text}
            </h6>

            <p className="text-[8px] md:text-sm lg:text-base xl:text-lg">
                {author}
            </p>
        </div>
    )
}

const SplashSection: React.FC = () => {

    return (
        <>
            <section className="w-full flex flex-col items-center px-14 md:px-20 lg:px-32 xl:px-50 mb-12.5 md:mb-10 lg:mb-8 xl:mb-6">
                <figure className="relative w-full">
                    <img
                        src={splashSectionBG.src}
                        alt="splash section image"
                        className="object-cover"
                    />

                    <Quote
                        text='"Wine is constant proof that God loves us and loves to see us happy."'
                        author="Benjamin Franklin"
                        positionClassName="top-[10%] left-0"
                    />

                    <Quote
                        text='"Wine makes daily living easier, less hurried, with fewer tensions and more tolerance."'
                        author="Benjamin Franklin"
                        positionClassName="top-[40%] -right-[10%] sm:-right-[5%] lg:-right-[10%]"
                    />

                    <Quote
                        text='"Wine rejoices the heart of man, and joy is the mother of all virtues."'
                        author="Johann Wolfgang von Goethe"
                        positionClassName="bottom-[20%] xl:bottom-[40%] -left-[15%] sm:-left-[5%] md:-left-[10%] lg:-left-[15%]"
                    />

                    <Quote
                        text='"Wine is the most civilized thing in the world."'
                        author="Ernest Hemingway"
                        positionClassName="bottom-[7%] xl:bottom-[12%] right-0 sm::right-[5%] lg:right-0"
                    />
                </figure>
            </section>
        </>
    )
}

export default SplashSection;