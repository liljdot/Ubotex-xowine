"use client"

import Image, { StaticImageData } from "next/image"

const GalleryImage: React.FC<{ image: StaticImageData }> = ({ image }) => {

    return (
        <figure className="relative w-52.5 h-47 md:size-full shrink-0 hover:scale-150 hover:transition-transform duration-300 ease-in-out hover:z-1">
            <Image fill src={image} alt="bar image" />
        </figure>
    )
}

const Gallery: React.FC = () => {
    const importAll = (r: any) => { return r.keys().map(r) }
    const images = importAll(require.context("/public/bar", false, /\.(png|jpe?g)$/))

    return (
        <>
            <div className="flex flex-row md:grid grid-cols-3 xl:grid-cols-[repeat(3,_370px)] md:auto-rows-[200px] lg:auto-rows-[330px] xl:auto-rows-[358px] gap-2.5 md:gap-4 xl:gap-5 overflow-x-scroll md:overflow-visible justify-center">
                {
                    images.map((image: any, index: number) => <GalleryImage key={"bar-image-" + index} image={image} />)
                }
            </div>
        </>
    )
}

export default Gallery;