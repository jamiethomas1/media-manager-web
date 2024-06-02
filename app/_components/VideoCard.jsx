import HoverThumbnail from "./HoverThumbnail";

export default async function VideoCard({ video, studio, cast }) {
    // const [studio, setStudio] = useState("")
    // const [cast, setCast] = useState([])
    //
    // useEffect(() => {
    //     fetch(process.env.backendUrl + "/api/studio/" + video.studio_id)
    //         .then(res => res.json())
    //         .then(data => setStudio(data))
    // }, [video.studio_id])
    //
    // useEffect(() => {
    //     fetch(process.env.backendUrl + "/api/cast/" + video.id)
    //         .then(res => res.json())
    //         .then(data => setCast(data))
    // }, [video.id])
    
    return (
        <div className="rounded grid-item p-4 break-words bg-zinc-600">
            <p className="text-base">{video.title}</p>
            {cast.map(actress => <p key={actress.id}>{actress.name}</p>)}
            <p className="text-sm">{studio.name}</p>
            <HoverThumbnail thumbnails={video.thumbnails} />
        </div>
    )
}
