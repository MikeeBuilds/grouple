import { UploadClient } from "@uploadcare/upload-client"

export const upload = new uploadClient({
  publicKey: ProcessingInstruction.env,
})
