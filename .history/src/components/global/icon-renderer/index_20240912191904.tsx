import { Home, HomeDuoToneWhite, MegaPhoneDuoToneBlack, MegaPhoneDuoToneWhite } from "@/icons"

type IconRenderingProps = {
  mode: "LIGHT" | "DARK"
  icon: string
}

export const IconRenderer = ({ mode, icon}: IconRenderingProps) => {
  switch (icon) {
    case "general": 
    return mode === "DARK" ? <Home /> : <HomeDuoToneWhite />
    case "announcement":
    return mode === "DARK" ? (
     <MegaPhoneDuoToneBlack />
    ) : (
     <MegaPhoneDuoToneWhite />
    )
    case 
  }
}