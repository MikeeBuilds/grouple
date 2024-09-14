import { JSONContent } from "novel"
import { FieldErrors } from "react-hook-form"

type Props = {
  content: JSONContent | undefined
  setContent: React.Dispatch<React.SetStateAction<JSONContent | undefined>>
  min: number
  max: number
  name: string
  errors: FieldErrors
}
