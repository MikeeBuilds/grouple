import { cx } from "class-variance-authority"
import 

const tiptapImage = TiptapImage.extend({
    addProseMirrorPlugins() {
        return [
            UploadImagesPlugin({
                imageClass: cx("opacity-40 rounded-lg border border-stone-200")
            }),
        ]
    },
}).configure({
    allowBase64: true,
    HTMLAttributes: {
        class: cx("rounded-lg border border-muted"),
    },
})