import { Fragment } from "react";
import { motion, Variants } from "motion/react";
import { MENU_LIST } from "@/app/constants/navigation-constant";

const NavbarListMobile = ({
  className,
  isOpen,
  onToggle,
}: {
  className?: string;
  isOpen: boolean;
  onToggle: (toggle: boolean) => void;
}) => {
  const navVariant: Variants = {
    open: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    close: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const closeVariant1: Variants = {
    open: {
      width: "1.5rem", 
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    close: {
      width: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const closeVariant2: Variants = {
    open: {
      width: "1.5rem", 
      transition: {
        duration: 0.4,
      },
    },
    close: {
      width: 0,
      transition: {
        duration: 0.2
      },
    },
  };

  const ulVariant: Variants = {
    open: {
      transition: {
        delayChildren: 1.1,
        staggerChildren: 0.18,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant: Variants = {
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    close: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      className={["fixed inset-0 w-full bg-black/80 backdrop-blur-md z-50", className].join(" ")}
      variants={navVariant}
      initial="close"
      animate={isOpen ? "open" : "close"}
    >
      <motion.button
        variants={ulVariant}
        className="size-8 absolute flex items-center justify-center right-5 top-5 cursor-pointer overflow-hidden"
        aria-label="Close"
        onClick={() => onToggle(false)}
      >
        <motion.div
          variants={closeVariant1}
          className="absolute bg-white h-0.5 w-6 rotate-45"
        />
        <motion.div
          variants={closeVariant2}
          className="absolute bg-white h-0.5 w-6 -rotate-45"
        />
      </motion.button>
      <motion.ul
        variants={ulVariant}
        className="flex flex-col justify-center items-center h-full gap-y-10 overflow-hidden"
      >
        {MENU_LIST.map(({ title, href, disabled }) => (
          <Fragment key={title}>
            {!disabled && (
              <li className="overflow-y-hidden">
                <motion.div variants={liVariant}>
                  <a
                    className="relative text-white text-2xl after:h-[1px] after:bg-white after:absolute after:left-0 after:w-full after:-bottom-1.5 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
                    href={href}
                  >
                    {title}
                  </a>
                </motion.div>
              </li>
            )}
          </Fragment>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavbarListMobile;
