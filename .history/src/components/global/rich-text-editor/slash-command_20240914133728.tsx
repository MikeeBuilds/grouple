import { upload } from "@/lib/uploadcare"
import { MessageSquarePlus } from "lucide-react"
import { createSuggestionItems } from "novel/extensions"

export const createSuggestionItems = createSuggestionItems([
  {
    title: "Send Feedback",
    description: " Let us kow how we can improve.",
    icon: <MessageSquarePlus size={18} />,
  },
])
