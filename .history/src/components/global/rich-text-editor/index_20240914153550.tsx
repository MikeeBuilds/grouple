"use client"

import {
    EditorBubble,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
  JSONContent,
} from "novel"
import { useState } from "react"
import { FieldErrors } from "react-hook-form"
import { HtmlParser } from "../html-parser"
import { Edit } from "lucide-react"
import { cn } from "@/lib/utils"
import { defaultExtensions } from "./extensions"
import {
  CharacterCount,
  handleCommandNavigation,
  Placeholder,
} from "novel/extensions"
import { slashCommand, suggestionItems } from "./slash-command"
import { Video } from "./video"
import { Image } from "./image"

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
        <EditorRoot>
          <EditorContent
            className={cn(
              inline
                ? onEdit && "mb-5"
                : "border-themeGray bg-themeBlack w-full",
            )}
            initialContent={content}
            editorProps={{
              editable: () => !disabled as boolean,
              handleDOMEvents: {
                keydown: (_view, event) => handleCommandNavigation(event),
              },
              attributes: {
                class: `prose prose-lg dark:prove-invert focus:outline-none max-w-full [&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl text-themeTextGray`,
              },
            }}
            onUpdate={({ editor }) => {
              const json = editor.getJSON()
              const text = editor.getText()

              if (setHtmlContent) {
                const html = editor.getHTML()
                setHtmlContent(html)
              }
              setContent(json)
              setTextContent(text)
              setCharacters(text.length)
            }}
            extensions={[
              ...defaultExtensions,
              slashCommand,
              CharacterCount.configure({
                limit: max,
              }),
              Placeholder.configure({
                placeholder: "Type / to insert element...",
              }),
              Video,
              Image,
            ]}
          >
            <EditorCommand className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
              <EditorCommandEmpty className="px-2 text-muted-foreground">
                No Results
              </EditorCommandEmpty>
              {suggestionItems.map((item: any) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command(val)}
                  className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent`}
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
              <EditorBubble
                tippyOptions={{
                    placement: "top",
                }}
                className="flex w-fit max-w-[90vw]"
              >
                
              </EditorBubble>
            </EditorCommand>
          </EditorContent>
        </EditorRoot>
      )}
    </div>
  )
}

export default BlockTextEditor
