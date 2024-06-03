'use client'

import { useState, useEffect } from "react"

export default function Video({ params }) {
    const [video, setVideo] = useState({})
    const [studio, setStudio] = useState({})
    const [cast, setCast] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/video/" + params.id)
            .then(res => res.json())
            .then(data => setVideo(data))
    }, [params.id])

    useEffect(() => {
        fetch("http://localhost:8000/api/studio/" + video.studio_id)
            .then(res => res.json())
            .then(data => setStudio(data))
    }, [video.studio_id])

    useEffect(() => {
        fetch("http://localhost:8000/api/cast/" + video.id)
            .then(res => res.json())
            .then(data => setCast(data))
    }, [video.id])

    return (
        <div>
            <p>{video.title}</p>
            <video src={"http://localhost:8000/" + video.path} controls />
            <p>{video.date}</p>
            <p>{studio.name}</p>
            {cast.map(actress => <p key={actress.id}>{actress.name}</p>)}
        </div>
    )
}
