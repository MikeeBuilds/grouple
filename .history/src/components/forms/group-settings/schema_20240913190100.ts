import { z } from "zod"

export const MAX_UPLOAD_SIZE = 1024 * 1024 * 2
export const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"]

export const GroupSettingsSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .optional().or,
})
