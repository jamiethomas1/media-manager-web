export default async function Video({ params }) {
    let video = await getVideo(params.id)
    let studio = await getStudio(video.studio_id)
    let cast = await getCast(video.id)

    const dateOptions = {
        day: "numeric",
        month: "short",
        year: "numeric"
    }
    const release_date = new Date(Date.parse(video.release_date)).toLocaleDateString("en-GB", dateOptions)

    return (
        <div>
            <p>{video.title}</p>
            <video src={"http://localhost:8000/" + video.path} controls />
            <p>{studio.name}</p>
            <p>{release_date}</p>
            {cast.map(actress => <p key={actress.id}>{actress.name}</p>)}
        </div>
    )
}

async function getVideo(id) {
    const res = await fetch(process.env.backendUrl + "/api/video/" + id)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    const data = await res.json()

    return data
}

async function getStudio(id) {
    const res = await fetch(process.env.backendUrl + "/api/studio/" + id)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    const data = await res.json()

    console.log(data)

    return data
}

async function getCast(id) {
    const res = await fetch(process.env.backendUrl + "/api/cast/" + id)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    const data = await res.json()

    return data
}
