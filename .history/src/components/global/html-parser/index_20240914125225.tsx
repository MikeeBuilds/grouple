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
        <div className="[&_h1]:text-4xl "></div>
    )
}