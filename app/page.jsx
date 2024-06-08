import VideoCard from "./_components/VideoCard";

export default async function Home() {
    let videos = await getVideos()

    return (
        <div className="grid grid-cols-4 gap-4 max-w-screen-lg p-4 mx-auto 2xl:max-w-screen-2xl bg-zinc-800">
            {videos.map(async (video) => {
                let studio = await getStudio(video.studio_id)
                let cast = await getCast(video.id)
                let tags = await getTags(video.id)

                return (
                    <VideoCard 
                        key={video.id} 
                        video={video}
                        studio={studio}
                        cast={cast}
                        tags={tags}
                    />)
            })}
        </div>
    );
}

async function getVideos() {
    const res = await fetch(process.env.backendUrl + "/api/videos")

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

async function getTags(id) {
    const res = await fetch(process.env.backendUrl + "/api/tags/" + id)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    const data = await res.json()

    return data
}

