import { openSans } from "@/app/layout";
import ActionButton from "../ActionButton";
import celebrateSectionBG from "@/app/assets/celebrate-section-bg.png"
import { whatsappContact } from "@/app/data";

const CelebrateSection: React.FC = () => {

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(to bottom, #000000EE, #00000000), url(${celebrateSectionBG.src})` }} className="bg-cover bg-center pt-17 md:pt-24 lg:pt-40 pb-12.5 md:pb-16 lg:pb-24 xl:py-48.5">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12.5">
                    <div className="flex flex-col gap-5 xl:gap-15 text-neutral text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[105px] xl:font-medium px-5 xl:px-18">
                            Sip,
                            <br />
                            Savor,
                            <br />
                            and
                            <br />
                            Celebrate!
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <ActionButton to={whatsappContact} className="text-primary">Contact Us</ActionButton>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CelebrateSection;