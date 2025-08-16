import clsx from "clsx";
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
  motion
} from "motion/react";
import { useRef } from "react";

type VelocityTextProps = {
  children: string;
  baseVelocity: number;
  className?: string;
};

const VelocityText = ({ children, baseVelocity = 100, className }: VelocityTextProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directtionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directtionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directtionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directtionFactor.current = 1;
    }

    moveBy += directtionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className={clsx("overflow-hidden flex flex-wrap whitespace-nowrap", className)}>
      <motion.div className="font-semibold uppercase text-7xl flex whitespace-nowrap  flex-nowrap font-serif" style={{ x }}>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
};

export default VelocityText;