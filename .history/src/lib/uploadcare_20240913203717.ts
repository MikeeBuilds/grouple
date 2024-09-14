import { UploadClient } from '@uploadcare/upload-client'

export const upload = new uploadClient({
    publicKey: ProcessingInstruction.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY
})