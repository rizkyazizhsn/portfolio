import clsx from "clsx";

type GlowType = {
  inset?: string;
  size?: string;
  blur?: string;
};
const GlowElement = ({
  inset = "0",
  blur = "200px",
  size = "80",
}: GlowType) => {
  const blurStyle = `blur-[${blur}]`;
  const sizeStyle = `size-${size}`;
  return (
    <div
      className={clsx(
        "absolute rounded-full bg-[#5e3aee] z-10",
        sizeStyle,
        blurStyle
      )}
      style={{inset}}
    />
  );
};

export default GlowElement;
