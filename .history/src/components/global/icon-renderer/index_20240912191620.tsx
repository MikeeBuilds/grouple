type IconRenderingProps = {
  mode: "LIGHT" | "DARK"
  icon: string
}

export const IconRenderer = ({ mode, icon}: IconRenderingProps) => {
  switch (icon) {
    case "general": 
    return mode === "DARK" ? <Home/
  }
}