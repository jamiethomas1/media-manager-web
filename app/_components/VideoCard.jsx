export default function VideoCard({ video }) {
    return (
        <div className="border border-red-900 grid-item p-4 break-words">
            <p className="text-sm">{video.title}</p>
            <p>{video.studio_id}</p>
            <img
                src={process.env.backendUrl + '/' + video.thumbnails[2]}
                alt={process.env.backendUrl + '/' + video.thumbnails[2]}
                width={320}
                height={180}
            />
        </div>
    )
}
