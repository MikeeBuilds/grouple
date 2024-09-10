import Image from "next/image"

export default function Home() {
    return (
        <div>
            <h1 className="text-5xl font-bold">Grouple</h1>
            <p className="text-lg">A social media platform for groups</p>
            <Image src="/grouple.png" alt="Grouple logo" width={500} height={500} />
        </div>
    )
}
