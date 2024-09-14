import parse from "html-react-parser";
import { useEffect } from "react";

type HtmlParserProps = {
    html: string;
}

export const HtmlParser = ({ html }: HtmlParserProps) => {
    useEffect(() => {
        setMounted(true)
        return () => {}
    }, [])

    return (
        <div className="[&_h1]:text-4xl [&_h2]:text-3xl [&_blockquote]:italic [&_iframe]:aspect-video [&_h3]:text-2xl text-themeGray flex flex-col gap-y-3">
            {}
        </div>
    )
}