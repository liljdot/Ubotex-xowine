"use client"

import Image, { StaticImageData } from "next/image"

const GalleryImage: React.FC<{ image: StaticImageData }> = ({ image }) => {

    return (
        <figure className="relative w-52.5 h-47 shrink-0">
            <Image fill src={image} alt="bar image" />
        </figure>
    )
}

const Gallery: React.FC = () => {
    const importAll = (r: any) => { return r.keys().map(r) }
    const images = importAll(require.context("/public/bar", false, /\.(png|jpe?g)$/))

    return (
        <>
            <div className="flex flex-row gap-2.5 overflow-x-scroll">
                {
                    images.map((image: any, index: number) => <GalleryImage key={"bar-image-" + index} image={image} />)
                }
            </div>
        </>
    )
}

export default Gallery;