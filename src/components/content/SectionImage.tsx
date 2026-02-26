import type { ImageConfig } from "./types";

export const SectionImage = ({ image, alt }: { image: ImageConfig; alt: string }) => {
    console.log(image)
    return (
        <div className={`imageWrapper md:ml-8`}>
            <img
                className={`imageSection ${image.border ? 'with-border' : ''}`}
                src={`${import.meta.env.BASE_URL}images/${image.name}`}
                alt={alt}
            />
        </div>
    );
};
