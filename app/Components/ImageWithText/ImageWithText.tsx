import Image from "next/image";

interface Props {
    title?: string;
    subTitle?: string;
    text?: string;
    textAlign?: 'left' | 'center' | 'middle';
    imageFirst?: boolean;
    imageUrl?: string;
    imageSize?: 'small' | 'medium' | 'large';
}

const imageSizes = {
    small: { width: 150, height: 150 },
    medium: { width: 300, height: 200 },
    large: { width: 600, height: 400 },
};

export default function ImageWithText({
    title,
    subTitle,
    text,
    textAlign = 'left',
    imageFirst = true,
    imageUrl,
    imageSize = 'medium',
}: Props) {
    const img = imageUrl ? (
        <img
            src={imageUrl}
            alt={title || "Image"}
            width={imageSizes[imageSize].width}
            height={imageSizes[imageSize].height}
        />
    ) : null;

    const content = (
        <div>
            {title && <h2>{title}</h2>}
            {subTitle && <p>{subTitle}</p>}
            {text && <p>{text}</p>}
        </div>
    );

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {imageFirst ? (
                <>
                    {img}
                    {content}
                </>
            ) : (
                <>
                    {content}
                    {img}
                </>
            )}
        </div>
    );
}
