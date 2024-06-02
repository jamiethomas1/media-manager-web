'use client'

import { useState } from "react";

export default function HoverThumbnail({ thumbnails }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [hoverInterval, setHoverInterval] = useState(null)

    const images = thumbnails.map(url => 'http://localhost:8000/' + url)

    const handleMouseEnter = () => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 500)

        setHoverInterval(intervalId)
    }

    const handleMouseLeave = () => {
        clearInterval(hoverInterval)
        setCurrentImageIndex(0)
    }
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="inline-block relative">
            <img src={images[currentImageIndex]} alt="Thumbnail" className="w-80 h-auto" />
        </div>
    )
}
