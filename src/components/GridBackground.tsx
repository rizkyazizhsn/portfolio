import clsx from "clsx";

const GridBackground = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={clsx("relative size-full bg-background", className)}>
      <div
        className={clsx(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)] dark:bg-black -z-10" />
      {children}
    </div>
  );
};

export default GridBackground;
