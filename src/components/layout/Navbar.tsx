import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import NavbarList from "./NavbarList";
import { motion, useMotionValueEvent, useScroll, Variants } from "motion/react";
import HumbergerButton from "./HumbergerButton";
import { useToggle } from "@/hooks/useToggle";
import NavbarListMobile from "./NavbarListMobile";
import clsx from "clsx";

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useToggle(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);

    const previous = scrollY.getPrevious();
    setIsOnTop(latest < 10);
    if (previous !== undefined && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handler);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setIsOpen]);

  const hideNavItemsVariant: Variants = {
    open: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    close: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.7,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "-100%" },
        }}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
          isOnTop ? "bg-transparent" : "bg-black/80 backdrop-blur-md"
        )}
      >
        <div className="container">
          <motion.div
            variants={hideNavItemsVariant}
            animate={isOpen ? "open" : "close"}
            className="flex items-center justify-between py-5"
          >
            {/* Logo */}
            <Logo />
            {/* Humberger Button */}
            <HumbergerButton
              className="block sm:hidden"
              isOpen={isOpen}
              onToggle={setIsOpen}
            />
            {/* Navbar List */}
            <NavbarList className="hidden sm:inline-block" />
          </motion.div>
        </div>
      </motion.header>
      <NavbarListMobile
        isOpen={isOpen}
        onToggle={setIsOpen}
        className="block sm:hidden"
      />
    </>
  );
};

export default Navbar;
