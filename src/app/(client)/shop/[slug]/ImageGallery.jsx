"use client"
import sanityService from "@/lib/sanityConfig";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery({ className, data }) {
    const { images, name } = data || {};
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div className={`${className}`}>
            <div className="grid gap-base">
                {/* Display Image */}
                <div className="grid aspect-[4/4.5] rounded border overflow-hidden">
                    <Image
                        className="size-full aspect-[4/4.5] object-cover"
                        src={sanityService.getImageUrl(images[selectedImage]).width(800).url() || '/images/common/error-image.png'}
                        width={800}
                        height={900}
                        alt={`${name} image`}
                    />
                </div>

                {/* Other Images */}
                <div className="h-fit w-fit flex gap-sm overflow-x-scroll">
                    {images && images.map((item, i) => (
                        <Image
                            className={`min-h-28 max-h-40 aspect-[4/4.5] w-fit object-cover cursor-pointer rounded ${selectedImage == i && "outline outline-4 -outline-offset-4 outline-primary"}`}
                            src={sanityService.getImageUrl(item).width(160).url() || '/images/common/error-image.png'}
                            width={160}
                            height={180}
                            alt={`${name} image`}
                            key={item._key + i}
                            onClick={() => setSelectedImage(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
