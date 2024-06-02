'use client'

import { useEffect, useState } from "react";
import VideoCard from "./_components/VideoCard";

export default function Home() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(process.env.backendUrl + "/api/videos")
            .then(res => res.json())
            .then(data => setVideos(data))
    }, [])

    return (
        <div className="grid grid-cols-4 gap-4 max-w-screen-lg p-4 mx-auto 2xl:max-w-screen-2xl bg-zinc-800">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
}
