import { useState } from "react";

export default function HoverThumbnail({ thumbnails }) {
    const [hovering, setHovering] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [hoverInterval, setHoverInterval] = useState(null)

    const images = thumbnails.map(url => process.env.backendUrl + '/' + url)

    const handleMouseEnter = () => {
        setHovering(true)
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 1000)

        setHoverInterval(intervalId)
    }

    const handleMouseLeave = () => {
        setHovering(false)
        clearInterval(hoverInterval)
        setCurrentImageIndex(0)
    }
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="inline-block relative">
            <img src={images[currentImageIndex]} alt="Thumbnail" className="w-80 h-auto" />
        </div>
    )
}
