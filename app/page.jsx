'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [video, setVideo] = useState("")

    useEffect(() => {
        fetch(process.env.backendUrl + "/api/video/1")
            .then(res => res.json())
            .then(data => setVideo(data[0]))
    })

    return (
        <div>
            <h1 className="text-4xl font-bold">See below for test</h1>
            <p>{video.title}</p>
            <video src={video.path} controls></video>
        </div>
    );
}
