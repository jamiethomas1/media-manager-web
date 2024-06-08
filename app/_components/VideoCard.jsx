import HoverThumbnail from "./HoverThumbnail";

export default async function VideoCard({ video, studio, cast, tags }) {
    const dateOptions = {
        day: "numeric",
        month: "short",
        year: "numeric"
    }
    const release_date = new Date(Date.parse(video.release_date)).toLocaleDateString("en-GB", dateOptions)

    let date = new Date(0);
    date.setSeconds(video.length);
    let duration = date.toISOString().substring(11, 19).replace(/^[0:]+/, "");

    const firstThreeTags = tags.slice(0, 2)

    return (
        <div className="rounded grid-item p-4 break-words bg-zinc-600">
            <a href={"/watch/" + video.id}>
                <p className="text-base">{video.title}</p>
                {cast.map(actress => <p key={actress.id}>{actress.name}</p>)}
                <p className="text-sm">{studio.name}</p>
                <p className="text-sm">{release_date}</p>
                <p className="text-sm">{duration}</p>
                {firstThreeTags.map(tag => <p key={tag.id}>{tag.name}</p>)}
                <HoverThumbnail thumbnails={video.thumbnails} />
            </a>
        </div>
    )
}
