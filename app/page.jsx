'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [test, setTest] = useState("")

    useEffect(() => {
        fetch(process.env.backendUrl + "/api/test")
            .then(res => res.json())
            .then(data => setTest(data.message))
    })

    return (
        <div>
            <h1 className="text-4xl font-bold">See below for test</h1>
            <p>{test}</p>
        </div>
    );
}
