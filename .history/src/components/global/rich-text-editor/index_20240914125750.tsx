import { JSONContent } from "novel"
import { useState } from "react"
import { FieldErrors } from "react-hook-form"
import { HtmlParser } from "../html-parser"
import { Edit } from "lucide-react"

// import {
//     EditorBubble,
//     EditorCommand,
//     EditorCommandEmpty,
//     EditorCommandItem,
//     EditorContent,
//     EditorRoot,
//     JSONContent
// } from "novel"

type Props = {
  content: JSONContent | undefined
  setContent: React.Dispatch<React.SetStateAction<JSONContent | undefined>>
  min: number
  max: number
  name: string
  errors: FieldErrors
  textContent: string | undefined
  setTextContent: React.Dispatch<React.SetStateAction<string | undefined>>
  onEdit?: boolean
  inline?: boolean
  disabled?: boolean
  htmlContent?: string | undefined
  setHtmlContent?: React.Dispatch<React.SetStateAction<string | undefined>>
}

const BlockTextEditor = ({
  content,
  setContent,
  min,
  max,
  name,
  errors,
  textContent,
  setTextContent,
  onEdit,
  inline,
  disabled,
  htmlContent,
  setHtmlContent,
}: Props) => {
  const [openNode, setOpenNode] = useState<boolean>(false)
  const [openLink, setOpenLink] = useState<boolean>(false)
  const [openColor, setOpenColor] = useState<boolean>(false)
  const [characters, setCharacters] = useState<number | undefined>(
    textContent?.length || undefined,
  )

  return (
    <div>
      {htmlContent && !onEdit && inline ? (
        <HtmlParser html={htmlContent} />
      ) : (
        <Edit
      )}
    </div>
  )
}

export default BlockTextEditor
