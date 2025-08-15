import { motion } from "motion/react";

interface HumbergerButtonProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const HumbergerButton = ({
  className,
  isOpen,
  onToggle,
}: HumbergerButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={[
        "w-6 h-4 flex flex-col items-end justify-between overflow-hidden text-white cursor-pointer",
        className,
      ].join(" ")}
    >
      <motion.span
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.3 }}
        className="inline-block bg-white w-3 h-0.5"
      />
      <motion.span
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.4 }}
        className="inline-block bg-white w-5 h-0.5"
      />
      <motion.span
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        className="inline-block bg-white w-6 h-0.5"
      />
    </button>
  );
};

export default HumbergerButton;
