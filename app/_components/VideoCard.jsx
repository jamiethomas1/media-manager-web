'use client'

import { useEffect, useState } from "react";

export default function VideoCard({ video }) {
    const [studio, setStudio] = useState("")

    useEffect(() => {
        fetch(process.env.backendUrl + "/api/studio/" + video.studio_id)
            .then(res => res.json())
            .then(data => setStudio(data))
    }, [video.studio_id])

    return (
        <div className="border border-red-900 grid-item p-4 break-words">
            <p className="text-sm">{video.title}</p>
            <p>{studio.name}</p>
            <img
                src={process.env.backendUrl + '/' + video.thumbnails[0]}
                alt={video.title}
                width={320}
                height={180}
            />
        </div>
    )
}
