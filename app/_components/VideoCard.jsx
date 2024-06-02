'use client'

import { useEffect, useState } from "react";
import HoverThumbnail from "./HoverThumbnail";

export default function VideoCard({ video }) {
    const [studio, setStudio] = useState("")

    useEffect(() => {
        fetch(process.env.backendUrl + "/api/studio/" + video.studio_id)
            .then(res => res.json())
            .then(data => setStudio(data))
    }, [video.studio_id])

    return (
        <div className="rounded grid-item p-4 break-words bg-zinc-600">
            <p className="text-sm">{video.title}</p>
            <p>{studio.name}</p>
            <HoverThumbnail thumbnails={video.thumbnails} />
        </div>
    )
}
