import clsx from "clsx";
import React from "react";

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center w-fit gap-x-2 sm:gap-x-3 rounded-full px-3 py-2 bg-white/10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
