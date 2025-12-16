import Content from "../../content";
import { ChangeThemeButton } from "../theme-context";

export default function Back({ x, style }) {
  const minX = 0.6;
  if (x < minX) return null;
  const progress = (x - minX) / (1 - minX);
  const combinedStyle = {
    opacity: progress,
    filter: `brightness(${progress})`,
    ...style,
  };

  return (
    <div className="CleanBack" style={combinedStyle}>
      <div style={{ textAlign: "right" }}>
        <ChangeThemeButton />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
