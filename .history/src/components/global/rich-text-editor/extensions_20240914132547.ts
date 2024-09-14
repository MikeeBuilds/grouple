import { cx } from "class-variance-authority"

const tiptapImage = TiptapImage.extend({
  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: cx("opacity-40 rounded-lg border"),
      }),
    ]
  },
})
