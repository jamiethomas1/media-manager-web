import HoverThumbnail from "./HoverThumbnail";

export default async function VideoCard({ video, studio, cast }) {
    return (
        <div className="rounded grid-item p-4 break-words bg-zinc-600">
            <a href={"/watch/" + video.id}>
                <p className="text-base">{video.title}</p>
                {cast.map(actress => <p key={actress.id}>{actress.name}</p>)}
                <p className="text-sm">{studio.name}</p>
                <HoverThumbnail thumbnails={video.thumbnails} />
            </a>
        </div>
    )
}
